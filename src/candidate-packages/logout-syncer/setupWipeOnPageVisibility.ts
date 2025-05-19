export type WipeOnPageVisibilityConfig = {
  fetchStatus: () => Promise<{status: number}>
}
export const setupWipeOnPageVisibility = (triggerWipe:() => void, config:WipeOnPageVisibilityConfig) => {
  const handleVisibilityChange = () => {
    if (document.visibilityState !== 'visible') return;

    config
      .fetchStatus()
      .then((response) => {
        if (response.status === 401) triggerWipe();
      })
      .catch((err) => {
        console.error('Failed to fetch status — treating as logout and wiping', err);
        triggerWipe();
      });
  };

  document.addEventListener('visibilitychange', handleVisibilityChange);
};
