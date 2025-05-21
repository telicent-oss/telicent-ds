// In-mem State for this page/tab
let value:string | undefined = undefined;

function get() {
  return value;
}

function remove() {
  value = undefined;
}


function set(val: number) {
  value = `${val}`
}


export const autoLoggedOut = { get, set, remove };
