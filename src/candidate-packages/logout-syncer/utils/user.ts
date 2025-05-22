// In-mem State for this page/tab
let value: string | number | undefined = undefined;

function get() {
  return value;
}

function remove() {
  value = undefined;
}

function set(val: string | number) {
  value = `${val}`;
}

export const user = { get, set, remove };
