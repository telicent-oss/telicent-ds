import { logger } from "./utils/logger";
import { retry } from "./utils/retry";
import { user } from "./utils/user";
import { withOfflineRetryAsync } from "./utils/withOfflineRetryAsync";


export const setupCheckUser = async (config: {
  triggerWipe: () => void;
  fetchCurrentUser: () => Promise<string | void>;
}) => {
  if (user.get()) {
    console.error("Expected user.get() to be unset!!");
    return;
  }

  const fetchCurrentUserOfflineAware = withOfflineRetryAsync<string | void>(config.fetchCurrentUser);

  const fetchWithRetry = () =>
    retry(fetchCurrentUserOfflineAware, {
      onRetry: (err, attempt, retries) =>
        logger.warn(`fetchCurrentUser failed, retry #${attempt} of ${retries}`, err),
    });

  
  let currentUser:string | void;
  try {
    currentUser = await fetchWithRetry();
  } catch (error) {
    console.error('Unable to fetch initial currentUser due to error (exiting early)', error);
    // config.triggerWipe(); // DO NOT DO THIS: infinite loop on logged out pages
    return;
  }

  if (!currentUser) {
    console.warn(`No currentUser: exiting early`);
    return;
  } else {
    logger.log(`Storing currentUser`, currentUser);
    user.set(currentUser);
  }

  const checkUser = async (reason: string) => {
    logger.log(`checkUser(): ${reason}...`);
    const currentUser = await fetchWithRetry().catch(() =>
      config.triggerWipe()
    );
    if (currentUser !== user.get()) {
      logger.log(
        `checkUser(): ${reason}`,
        currentUser,
        ` !== existing `,
        user.get()
      );
      config.triggerWipe();
    } else {
      logger.log(
        `checkUser(): ${reason}`,
        currentUser,
        ` === existing `,
        user.get()
      );
    }
  };
  return checkUser;
};
