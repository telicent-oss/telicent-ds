import { TeliBasicTableStory } from "../TeliBasicTable.stories";
import TeliBasicTable from "../TeliBasicTable";
import {
  TV_SERIES_RANKINGS_COLUMNS,
  TV_SERIES_RANKINGS_ROWS,
} from "./table-data";

const BasicTable: TeliBasicTableStory = {
  args: {
    align: "right",
    name: "basic-table",
    columns: TV_SERIES_RANKINGS_COLUMNS,
    rows: TV_SERIES_RANKINGS_ROWS,
  },
  render: (args) => <TeliBasicTable {...args} />,
  parameters: {
    docs: {
      description: {
        story: "A simple example of the basic table",
      },
    },
  },
};

export default BasicTable;
