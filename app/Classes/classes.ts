import { GlobalSettings } from "../page";

export class Utils {
  static getCellStateColor(state: CellState): string {
    switch (state) {
      case CellState.actionInvalidDestination:
      case CellState.actionInvalidDestination:
      case CellState.actionInvalidDestination:
      case CellState.default:
      default:
        return "rgb(247, 239, 239)";
    }
  }
}

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
  isPlayerMainCharacter: boolean;

  constructor(name: string, isPlayerMainCharacter: boolean = true) {
    this.name = name;
    this.isPlayerMainCharacter = isPlayerMainCharacter;
  }
}

export class Message {
  type: string = "generic";
}

export enum CellState {
  default,
  actionOriginLocation,
  actionValidDestination,
  actionInvalidDestination,
}

export class CellDS {
  row: number;
  column: number;
  components: Array<GameComponentDS>;
  key: string;
  cellState: CellState;

  constructor(row: number, column: number) {
    this.row = row;
    this.column = column;
    this.components = new Array<GameComponentDS>();
    this.key = this.column + "_" + this.row;
    this.cellState = CellState.default;
  }
}
