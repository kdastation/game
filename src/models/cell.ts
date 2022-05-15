import { Figure } from "./figures/figure";
import { Board } from "./board";
import { Colors } from "./colors";

export class Cell {
  private x: number;
  private y: number;
  private board: Board;
  readonly color: Colors;
  readonly id: number;
  public figure: Figure | null;

  constructor(
    x: number,
    y: number,
    color: Colors,
    board: Board,
    figure: Figure | null
  ) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.board = board;
    this.id = Math.random();
    this.figure = figure;
  }
}
