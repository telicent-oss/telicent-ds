export const removeHTMLTags = (string: string) =>
  (string || "").replace(/<[^>]*>/g, "");

export const splitLabelString = (string = "") => {
  const str = string.replace(/([a-zA-Z])(?=[A-Z])/g, "$1 ").toLowerCase();
  return `${str[0].toUpperCase()}${str.slice(1)}`;
};

export const splitURIForNamespaceAndTerm = (string: string) => {
  try {
    const url = new URL(string);
    let [namespace, term] = [string, ""];
    if (url.hash !== "") {
      [namespace, term] = [
        `${url.origin}${url.pathname}`,
        url.hash.substring(1),
      ];
    } else if (url.pathname !== "") {
      const split = url.pathname.split("/");
      [term, namespace] = [
        split.pop() ?? "",
        `${url.origin}${split.join("/")}`,
      ];
    }
    return [namespace, term];
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`URI '${string}' is not valid, ${e}`);
    return [string, ""];
  }
};
