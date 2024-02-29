import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";

interface DependenciesTable {
  dependencies: { [key: string]: string };
  className?: string;
}

const DependenciesTable: React.FC<DependenciesTable> = ({
  dependencies,
  className: tableClassName,
}) => {
  const depArr = Object.entries(dependencies);
  if (depArr.length === 0)
    return <p className="dark:text-whiteSmoke">Dependencies not found</p>;

  return (
    <table
      className={classNames(
        "table-auto w-full md:w-1/2 dark:text-whiteSmoke border-collapse border border-whiteSmoke-700 rounded-md",
        tableClassName
      )}
    >
      <thead className="bg-black-100 sticky top-0">
        <tr className="text-left border-b border-b-whiteSmoke-700">
          <th className="py-2 px-1">Dependency</th>
          <th className="py-2 px-1">Version</th>
        </tr>
      </thead>
      <tbody>
        {depArr.map((row) => (
          <tr
            key={row[0]}
            className="border-b border-b-whiteSmoke-700 hover:bg-black-300"
          >
            {row.map((cell) => (
              <td key={cell} className="py-2 px-1">
                {cell.replace("^", "")}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DependenciesTable;
