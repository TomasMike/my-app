import { GlobalSettings } from "../page";

export class Utils {
  static getCellStateColor(state: CellState): string {
    return GlobalSettings.CellStateColors.has(state)
      ? (GlobalSettings.CellStateColors.get(state) as string)
      : "";
  }

  static GetDistanceBetweenTwoCells(cellOneKey: string, cellTwoKey: string): number 
  {
    var cellOneCoords = this.GetColumnRowFromCellKey(cellOneKey);
    var cellTwoCoords = this.GetColumnRowFromCellKey(cellTwoKey);
    
    if(cellOneCoords.column == cellTwoCoords.column)
    {

    }

    return 0;
  }

    static GetColumnRowFromCellKey(key: string): {column: number, row: number}
    {
        return {
            column:Number(key.substring(0, key.indexOf("_"))),
            row:Number(key.substring(key.indexOf("_")+1))
        }
    } 
}

export enum Mode {
  normal,
  move,
}

export enum HexDisplayMode{
    //allways using even setup
    Pointy,
    Flat,
}
export class GameState {
  mode: Mode;
  cells: CellDS[];

  constructor() {
    this.mode = Mode.normal;
    this.cells = [];

    for (let c = 0; c < GlobalSettings.ColumnCount; c++) {
      for (let r = 0; r < GlobalSettings.RowCount; r++) {
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
  id:string;
  cellState: CellState;

  constructor(row: number, column: number) {
    this.row = row;
    this.column = column;
    this.components = new Array<GameComponentDS>();
    this.id = this.column + "_" + this.row;
    this.cellState = CellState.default;
  }
}
