import { GlobalSettings } from "../page";

export enum Mode {
  normal,
  move,
}
export class GameState {
  mode: Mode;
  cells: CellDS[];

  constructor() {
    this.mode = Mode.normal;
    this.cells = [];

    for (let c = 0; c < GlobalSettings.columnCount; c++) {
      for (let r = 0; r < GlobalSettings.rowCount; r++) {
        this.cells.push(new CellDS(r, c));
      }
    }
  }
}

export enum ComponentType {}

export class GameComponentDS {
  name: string = "none";

  constructor(name: string) {
    this.name = name;
  }
}

export class Message {
  type: string = "generic";
}

export class CellDS {
  row: number;
  column: number;
  components: Array<GameComponentDS>;
  key: string;

  constructor(row: number, column: number) {
    this.row = row;
    this.column = column;
    this.components = new Array<GameComponentDS>();
    this.key = this.column + "_" + this.row;
  }
}
