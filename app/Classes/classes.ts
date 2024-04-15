
export enum Mode {
  normal,
  move,
}

export enum HexDisplayMode{
    //allways using even setup
    Pointy,
    Flat,
}
export enum ComponentType {
    PlayerPawn,
    Monster
}

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
  text:string;

  constructor(row: number, column: number) {
    this.row = row;
    this.column = column;
    this.components = new Array<GameComponentDS>();
    this.id = this.column + "_" + this.row;
    this.cellState = CellState.default;
    this.text= "";
  }
}


export class test{
    static staticProperty = 'someValue';
}


;