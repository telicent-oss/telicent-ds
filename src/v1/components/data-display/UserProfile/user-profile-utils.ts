// Replaces underscore with space and capitalises first letter of each word.
export const formatTitle = (title) => {
  const words = title.split("_");
  const titleCasedWords = words.map((word) => {
    if (word.length === 0) return "";
    return `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`;
  });
  return titleCasedWords.join(" ");
};
