'use client';
import { CellState, HexDisplayMode } from './Classes/classes';


export const GlobalSettings = {
    Size: 60,
    RowCount: 5,
    ColumnCount: 5,
    //HexDisplayMode:HexDisplayMode.Flat,
    HexDisplayMode: HexDisplayMode.Pointy,
    IsHexDisplayModeFlat: () => GlobalSettings.HexDisplayMode == HexDisplayMode.Flat,
    CellStateColors: new Map([
        [CellState.actionInvalidDestination, "OrangeRed"],
        [CellState.actionOriginLocation, "DodgerBlue"],
        [CellState.actionValidDestination, "DarkGreen"],
        [CellState.default, "AliceBlue"],
    ])
};
