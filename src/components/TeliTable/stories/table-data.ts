const createData = (
  name: string,
  rating: string | number,
  totalEpisodes: string | number,
  year: string | number
) => {
  return [name, rating.toString(), totalEpisodes.toString(), year.toString()];
};

export const TV_SERIES_RANKINGS_COLUMNS: Array<string> = [
  "Title",
  "Rating",
  "Total episodes",
  "Year",
];

export const TV_SERIES_RANKINGS_ROWS: Array<Array<string>> = [
  createData("The Fall of the House of Usher", 8.1, 8, 2023),
  createData("Gen V", 8.0, 10, "2023 - present"),
  createData("Goosebumps", 6.6, 10, "2023 - present"),
  createData("Loki", 8.2, 12, "2021 - present"),
  createData("Bodies", 7.5, 8, 2023),
  createData("Rick and Morty", 9.1, 74, 2013),
  createData("Lessons in Chemistry", 7.9, 8, "2023 - present"),
  createData("Sex Education", 8.3, 32, "2019 - 2023"),
  createData("American Horror Story", 8.0, 129, "2011 - present"),
  createData("Ahsoka", 7.7, 9, "2023 - present"),
];

const TV_SERIES_RANKINGS = [
  TV_SERIES_RANKINGS_COLUMNS,
  createData("The Fall of the House of Usher", 8.1, 8, 2023),
  createData("Gen V", 8.0, 10, "2023 - present"),
  createData("Goosebumps", 6.6, 10, "2023 - present"),
  createData("Loki", 8.2, 12, "2021 - present"),
  createData("Bodies", 7.5, 8, 2023),
  createData("Rick and Morty", 9.1, 74, 2013),
  createData("Lessons in Chemistry", 7.9, 8, "2023 - present"),
  createData("Sex Education", 8.3, 32, "2019 - 2023"),
  createData("American Horror Story", 8.0, 129, "2011 - present"),
  createData("Ahsoka", 7.7, 9, "2023 - present"),
];

export default TV_SERIES_RANKINGS;
