'use client';
import React from 'react';
import { Grid } from './Grid';
import { CellState } from './Classes/classes';

export const GlobalSettings = {
    size: 50,
    rowCount: 5,
    columnCount: 5,
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