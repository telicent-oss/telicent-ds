export const setupClickGating = async (checkUser: (reason:string) => Promise<void>) => {
  document.addEventListener("click", (e) => {
    if (document.visibilityState !== "visible") {
      e.preventDefault();
      checkUser('click').then(() => (e.target as HTMLElement).click());
    }
  });
};
