import { logger } from "./utils/logger";

export const setupCheckUserOnPageVisibility = (checkUser: (reason:string) => Promise<void>) => {
  // TODO debounce?
  const handleVisibilityChange = async () => {
    logger.log("handleVisibilityChange");
    if (document.visibilityState !== "visible") return;
    await checkUser('visibilitychange');
  };

  document.addEventListener("visibilitychange", handleVisibilityChange);

  window.addEventListener("focus", () => checkUser('focus')); // same thing
};
