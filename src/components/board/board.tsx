import React, { FC, useState } from "react";
import { Cell } from "../cell/cell";
import { Board as BoardModel } from "../../models/board";
import { Cell as CellModel } from "../../models/cell";
import "./board.scss";

interface BoardProps {
  board: BoardModel;
}

const Board: FC<BoardProps> = (props) => {
  const { board } = props;
  const [selectedCell, setSelectedCell] = useState<CellModel | null>(null);

  const selectCellOnClick = (cell: CellModel) => {
    if (cell.figure) {
      setSelectedCell(cell);
    }
  };

  return (
    <div className="board">
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => {
            return (
              <Cell
                selected={cell.id === selectedCell?.id}
                selectCellOnClick={selectCellOnClick}
                cell={cell}
                key={cell.id}
              />
            );
          })}
        </React.Fragment>
      ))}
    </div>
  );
};

export { Board };
