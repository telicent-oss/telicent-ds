import { TeliBasicTableStory } from "../TeliBasicTable.stories";
import TeliBasicTable from "../TeliBasicTable";
import {
  TV_SERIES_RANKINGS_COLUMNS,
  TV_SERIES_RANKINGS_ROWS,
} from "./table-data";

const StickyHeader: TeliBasicTableStory = {
  args: {
    stickyHeader: true,
    bordered: true,
    name: "sticky-header-table",
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

export default StickyHeader;
