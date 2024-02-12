'use client';
import React from 'react';
import { Grid } from './Grid';
import { CellState, HexDisplayMode } from './Classes/classes';

export const GlobalSettings = {
    Size: 60,
    RowCount: 10,
    ColumnCount: 10,
    //HexDisplayMode:HexDisplayMode.Flat,
    HexDisplayMode:HexDisplayMode.Pointy,
    IsHexDisplayModeFlat: () => GlobalSettings.HexDisplayMode == HexDisplayMode.Flat,
    CellStateColors: new Map([
        [CellState.actionInvalidDestination,"OrangeRed"],
        [CellState.actionOriginLocation,"DodgerBlue"],
        [CellState.actionValidDestination,"DarkGreen"],
        [CellState.default,"AliceBlue"],
    ])
};



//const gameState = new GameState();

export default function Main() {

    return (
        <>
            <Grid />
        </>
    )
}