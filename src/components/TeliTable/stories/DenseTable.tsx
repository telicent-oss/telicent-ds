import { TeliBasicTableStory } from "../TeliBasicTable.stories";
import TeliBasicTable from "../TeliBasicTable";
import {
  TV_SERIES_RANKINGS_COLUMNS,
  TV_SERIES_RANKINGS_ROWS,
} from "./table-data";

const DenseTable: TeliBasicTableStory = {
  args: {
    compact: true,
    align: "right",
    name: "dense-table",
    columns: TV_SERIES_RANKINGS_COLUMNS,
    rows: TV_SERIES_RANKINGS_ROWS,
  },
  render: (args) => <TeliBasicTable {...args} />,
  parameters: {
    docs: {
      description: {
        story: "A simple example of a dense basic table",
      },
    },
  },
};

export default DenseTable;
