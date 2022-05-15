import { FC } from "react";
import { Cell as CellModel } from "../../models/cell";
import "./cell.scss";

interface CellProps {
  cell: CellModel;
  selected: boolean;
  selectCellOnClick: (cell: CellModel) => void;
}

const Cell: FC<CellProps> = (props) => {
  const { cell, selected, selectCellOnClick } = props;
  return (
    <div
      onClick={() => selectCellOnClick(cell)}
      className={["cell", cell.color, selected ? "selected" : null].join(" ")}
    >
      {cell.figure?.logo && <img alt="logo" src={cell.figure.logo} />}
    </div>
  );
};

export { Cell };
