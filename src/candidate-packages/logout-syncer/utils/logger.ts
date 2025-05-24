// In-mem State for this page/tab
let active: boolean | undefined = false;

function setActive(val?: boolean) {
  active = val;
}

export const logger = {
  warn: (...args:unknown[]) => active && console.warn(...args),
  log: (...args:unknown[]) => active && console.log(...args),
  setActive,
};
