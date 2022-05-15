import { Cell } from "./../cell";
import logoBlack from "../../assets/images/black-circle.png";
import logoRed from "../../assets/images/red-circle.png";

import { FiguresNames } from "./figures-names";
import { Colors } from "../colors";

export class Figure {
  readonly color: Colors;
  readonly logo: typeof logoBlack;
  readonly cell: Cell;
  readonly name: FiguresNames;
  readonly id: number;

  constructor(color: Colors, cell: Cell) {
    this.cell = cell;
    this.color = color;
    this.cell.figure = this;
    this.logo = color === Colors.BLACK ? logoBlack : logoRed;
    this.name = FiguresNames.FIGURE;
    this.id = Math.random();
  }
}
