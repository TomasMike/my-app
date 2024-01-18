export enum Mode {
  normal,
  move,
}
export class GameState {
  mode: Mode;

  constructor() {
    this.mode = Mode.normal;
  }
}

export enum ComponentType {}

export class GameComponent {
    name:string = "none";

    constructor(name:string){
        this.name = name;
    }



}
