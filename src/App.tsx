import { FC, useEffect, useState } from "react";
import { Board as BoardComponent } from "./components/board/board";
import { Board } from "./models/board";
import "./app.scss";

const App: FC = () => {
  const [board, setBoard] = useState<Board | null>(null);

  useEffect(() => {
    start();
  }, []);

  const start = () => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.arrangeFigures();
    setBoard(newBoard);
  };

  return <div className="app">{board && <BoardComponent board={board} />}</div>;
};

export { App };
