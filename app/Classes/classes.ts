import { GlobalSettings } from "../page";

export enum Mode {
  normal,
  move,
}
export class GameState {
  mode: Mode;
  cells: Array<CellDS>;

  constructor() {
    this.mode = Mode.normal;
    this.cells = new Array<CellDS>();

    for (let c = 0; c < GlobalSettings.columnCount; c++) {
        for (let r = 0; r < GlobalSettings.rowCount; r++) {
            this.cells.push(new CellDS(r,c));
        }
    }
  }
}

export enum ComponentType {}

export class GameComponent {
  name: string = "none";

  constructor(name: string) {
    this.name = name;
  }
}

export class Message {
  type: string = "generic";
}

export class CellDS{
    row:number;
    column:number;
    components:Array<GameComponent>;
    key:string;

    constructor(row:number,column:number)
    {
        this.row = row;
        this.column = column;
        this.components = new Array<GameComponent>();
        this.key = this.column + "_" + this.row;
    }

}
