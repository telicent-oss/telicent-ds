export const setupCheckUserOnPageVisibility = (checkUser: (reason:string) => Promise<void>) => {
  // TODO debounce?
  const handleVisibilityChange = async () => {
    console.log("handleVisibilityChange");
    if (document.visibilityState !== "visible") return;
    await checkUser('visibilitychange');
  };

  document.addEventListener("visibilitychange", handleVisibilityChange);

  window.addEventListener("focus", () => checkUser('focus')); // same thing
};
