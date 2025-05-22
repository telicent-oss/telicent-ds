import { retry } from "./utils/retry";
import { user } from "./utils/user";

// TODO maybe
// const bc = new BroadcastChannel('session-sync');
// bc.onmessage = ({ data }) => {
//   if (data.user !== currentUser) triggerWipe();
// };
// function announceChange(user) {
//   bc.postMessage({ user });
// }ac
export const setupCheckUser = async (config: {
  triggerWipe: () => void;
  fetchCurrentUser: () => Promise<string | void>;
}) => {
  if (user.get()) {
    console.error("Expected user.get() to be unset!!");
    return;
  }
  const currentUser = await retry(() => config.fetchCurrentUser());

  if (!currentUser) {
    console.log(`No currentUser: exiting early`);
    // config.triggerWipe(); // infinite loop on logged out pages
    return;
  } else {
    console.log(`Storing currentUser`, currentUser);
    user.set(currentUser);
  }

  const checkUser = async (reason: string) => {
    console.log(`checkUser(): ${reason}...`);
    const currentUser = await retry(() => config.fetchCurrentUser());
    if (currentUser !== user.get()) {
      console.log(
        `checkUser(): ${reason}`,
        currentUser,
        ` !== existing `,
        user.get()
      );
      config.triggerWipe();
    } else {
      console.log(
        `checkUser(): ${reason}`,
        currentUser,
        ` === existing `,
        user.get()
      );
    }
  };
  return checkUser;
};
