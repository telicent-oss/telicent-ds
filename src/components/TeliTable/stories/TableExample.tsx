import TeliTableContainer from "../TeliTableContainer";
import TeliTable from "../TeliTable";
import TeliTableHead from "../TeliTableHead";
import TeliTableBody from "../TeliTableBody";
import TeliTableRow from "../TeliTableRow";
import TeliTableCell from "../TeliTableCell";
import { TeliTableStory } from "../TeliTable.stories";

const createData = (
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) => {
  return { name, calories, fat, carbs, protein };
};

const TableExample: TeliTableStory = {
  render: () => {
    const rows = [
      createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
      createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
      createData("Eclair", 262, 16.0, 24, 6.0),
      createData("Cupcake", 305, 3.7, 67, 4.3),
      createData("Gingerbread", 356, 16.0, 49, 3.9),
    ];

    return (
      <TeliTableContainer>
        <TeliTable minWidth={650} name="telicent-table">
          <TeliTableHead>
            <TeliTableRow>
              <TeliTableCell align="center" colSpan={1}>
                Food
              </TeliTableCell>
              <TeliTableCell align="center" colSpan={4}>
                Details
              </TeliTableCell>
            </TeliTableRow>
            <TeliTableRow>
              <TeliTableCell>Dessert (100g serving)</TeliTableCell>
              <TeliTableCell align="right">Calories</TeliTableCell>
              <TeliTableCell align="right">Fat&nbsp;(g)</TeliTableCell>
              <TeliTableCell align="right">Carbs&nbsp;(g)</TeliTableCell>
              <TeliTableCell align="right">Protein&nbsp;(g)</TeliTableCell>
            </TeliTableRow>
          </TeliTableHead>
          <TeliTableBody>
            {rows.map((row) => (
              <TeliTableRow key={row.name}>
                <TeliTableCell component="th" scope="row">
                  {row.name}
                </TeliTableCell>
                <TeliTableCell align="right">{row.calories}</TeliTableCell>
                <TeliTableCell align="right">{row.fat}</TeliTableCell>
                <TeliTableCell align="right">{row.carbs}</TeliTableCell>
                <TeliTableCell align="right">{row.protein}</TeliTableCell>
              </TeliTableRow>
            ))}
          </TeliTableBody>
        </TeliTable>
      </TeliTableContainer>
    );
  },
};

export default TableExample;
