import { TeliBasicTableStory } from "../TeliBasicTable.stories";
import TeliBasicTable from "../TeliBasicTable";
import {
  TV_SERIES_RANKINGS_COLUMNS,
  TV_SERIES_RANKINGS_ROWS,
} from "./table-data";

const CustomColumns: TeliBasicTableStory = {
  args: {
    bordered: true,
    verticalHeader: true,
    numberRows: true,
    name: "custom-header-table",
    columns: TV_SERIES_RANKINGS_COLUMNS,
    rows: TV_SERIES_RANKINGS_ROWS,
  },
  render: (args) => <TeliBasicTable {...args} />,
  parameters: {
    docs: {
      description: {
        story: `A caption functions like a heading for a table. Most screen 
        readers announce the content of captions. Captions help users to find a 
        table and understand what it's about and decide if they want to read it.
        <br />
        (WAI tutorial: https://www.w3.org/WAI/tutorials/tables/)`,
      },
    },
  },
};

export default CustomColumns;
