import { Figure } from "./figures/figure";
import { Colors } from "./colors";
import { Cell } from "./cell";
export class Board {
  readonly cells: Cell[][] = [];

  public initCells() {
    for (let x = 0; x < 8; x++) {
      const row: Cell[] = [];
      for (let y = 0; y < 8; y++) {
        if ((x + y) % 2 === 0) {
          row.push(new Cell(x, y, Colors.BLACK, this, null));
        } else {
          row.push(new Cell(x, y, Colors.WHITE, this, null));
        }
      }
      this.cells.push(row);
    }
  }

  public getCell(x: number, y: number) {
    return this.cells[y][x];
  }

  public arrangeFigures() {
    for (let i = 0; i < 8; i++) {
      if (i % 2 !== 0) {
        new Figure(Colors.WHITE, this.getCell(i, 0));
        new Figure(Colors.WHITE, this.getCell(i, 2));
        new Figure(Colors.BLACK, this.getCell(i, 6));
      } else {
        new Figure(Colors.WHITE, this.getCell(i, 1));
        new Figure(Colors.BLACK, this.getCell(i, 5));
        new Figure(Colors.BLACK, this.getCell(i, 7));
      }
    }
  }
}
