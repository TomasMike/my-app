'use client';
import { Component, MouseEventHandler } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from './Grid';

export const GlobalSettings = {
    size: 50,
    rowCount: 5,
    columnCount: 5
};



//const gameState = new GameState();

export default function Main() {

    return (
        <>
            <Grid />

        </>
    )
}


