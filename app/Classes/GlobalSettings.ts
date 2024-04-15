import { HexDisplayMode, CellState } from "./Classes";

export default class GlobalSettings {
  static Size: number = 60;
  static RowCount: number = 5;
  static ColumnCount: number = 5;
  static HexDisplayMode: HexDisplayMode = HexDisplayMode.Pointy;
  static IsHexDisplayModeFlat: () => boolean = () =>
    GlobalSettings.HexDisplayMode == HexDisplayMode.Flat;
  static CellStateColors: Map<CellState, string> = new Map([
    [CellState.actionInvalidDestination, "OrangeRed"],
    [CellState.actionOriginLocation, "DodgerBlue"],
    [CellState.actionValidDestination, "DarkGreen"],
    [CellState.default, "AliceBlue"],
  ]);
}
