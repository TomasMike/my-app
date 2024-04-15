import GlobalSettings from "./GlobalSettings";
import { Mode, CellDS } from "./Classes";

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
