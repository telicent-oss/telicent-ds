import { useState } from "react";
import TeliSelect, { SelectChangeEvent } from "../TeliSelect";
import { TeliSelectStory } from "../TeliSelect.stories";
import TOP_30_MOVIES from "./top-30-movies";

const MultiSelect: TeliSelectStory = {
  render: () => {
    const [movies, setMovies] = useState([]);

    const handleChange = (event: SelectChangeEvent<any>) => {
      const {
        target: { value },
      } = event;
      setMovies(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    };

    return (
      <TeliSelect
        multiple
        id="movie-selection"
        label="Select movies"
        value={movies}
        onChange={handleChange}
        options={TOP_30_MOVIES}
        width={250}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: `The <code>Select</code> component can handle multiple selections. 
It's enabled with the <code>multiple</code> prop. Like with the single selection, 
you can pull out the new value by accessing event.target.value in the onChange 
callback. It's always an array.`,
      },
      source: {
        code: `
import { TeliSelect, SelectChangeEvent } from  "@telicent-io/ds";

const [movies, setMovies] = useState([]);

const handleChange = (event: SelectChangeEvent<any>) => {
  const {
    target: { value },
  } = event;
  setMovies(
    // On autofill we get a stringified value.
    typeof value === "string" ? value.split(",") : value
  );
};

return (
  <TeliSelect
    multiple
    id="movie-selection"
    label="Select movies"
    value={movies}
    onChange={handleChange}
    options={TOP_30_MOVIES}
    width={250}
  />
);
      `,
      },
    },
  },
};

export default MultiSelect;
