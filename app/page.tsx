'use client';
import React from 'react';
import { Grid } from './Grid';
import { CellState } from './Classes/classes';

export const GlobalSettings = {
    size: 50,
    rowCount: 5,
    columnCount: 5,
    getCellStateColor: function(state:CellState): string{
        switch(state)
        {
            case CellState.actionInvalidDestination:
            case CellState.actionInvalidDestination:
            case CellState.actionInvalidDestination:
            case CellState.default : 
            default:
                return "rgb(247, 239, 239)";
        }
    }

};



//const gameState = new GameState();

export default function Main() {

    return (
        <>
            <Grid />

        </>
    )
}