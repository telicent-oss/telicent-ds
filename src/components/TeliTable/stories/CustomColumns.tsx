import { TeliBasicTableStory } from "../TeliBasicTable.stories";
import TeliSelect from "../../TeliSelect/TeliSelect";
import TeliBasicTable from "../TeliBasicTable";
import TeliTableCell from "../TeliTableCell";
import {
  TV_SERIES_RANKINGS_COLUMNS,
  TV_SERIES_RANKINGS_ROWS,
} from "./table-data";

const CustomColumns: TeliBasicTableStory = {
  args: {
    bordered: true,
    name: "custom-columns-table",
    columns: TV_SERIES_RANKINGS_COLUMNS,
    rows: TV_SERIES_RANKINGS_ROWS,
    renderColumnCell: (column: string) => (
      <TeliTableCell key={column} minWidth={220} className="space-y-4">
        <p>{column}</p>
        <TeliSelect
          fullWidth
          readOnly
          id={`select-${column}`}
          defaultValue={column}
          options={[
            { label: "Title" },
            { label: "Rating" },
            { label: "Total episodes" },
            { label: "Year" },
          ]}
        />
      </TeliTableCell>
    ),
  },
  render: (args) => <TeliBasicTable {...args} />,
  parameters: {
    docs: {
      description: {
        story: `Table columns can be rendered to fit various scenarios by using 
        <code>renderColumnCell</code> prop`,
      },
    },
  },
};

export default CustomColumns;
