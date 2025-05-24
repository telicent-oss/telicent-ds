export const setupCheckUserPolling = async (
  checkUser: (reason: string) => Promise<void>,
  checkUserPollTime: number
) => {
  const pollInterval = setInterval(() => checkUser("poll"), checkUserPollTime);
  window.addEventListener('beforeunload', () => clearInterval(pollInterval));
};
