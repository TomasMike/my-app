'use client';
import { MouseEventHandler, useState } from 'react';
import { Button } from './Components/Button';
import { CellDS, GameComponent, GameState, Mode } from './Classes/classes'
import { Cell } from './Components/Cell';
import React from 'react';

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

export function Grid() {
    const [currentMode, setCurrentMode] = useState(Mode.normal);
    const [gameState, setGameState] = useState(new GameState());

    //#region websocket stuff

    var ws_uri = "ws://localhost:8080";
    let wb = new WebSocket(ws_uri);

    function sendtoServer(): void {
        wb.send("hey");
    }

    function logWBState(): void {
        console.log(wb.readyState);
        // 0	CONNECTING	Socket has been created. The connection is not yet open.
        // 1	OPEN	The connection is open and ready to communicate.
        // 2	CLOSING	The connection is in the process of closing.
        // 3	CLOSED	The connection is closed or couldn't be opened.
    }

    function getClientList(): void {
        wb.send('{"type":"getClients"}');
    }

    wb.onmessage = function (event) {
        //when something comes from the server
        console.log("some data came from ws: " + event.data);
    };

    //#endregion

    function CellClick(text: string): void {
        console.info(text);
    }
    const cells = [];
    for (let c = 0; c < GlobalSettings.columnCount; c++) {
        for (let r = 0; r < GlobalSettings.rowCount; r++) {
            var key = c + "_" + r;

            cells.push(<Cell key={key} text='test' clickHandler={CellClick} components={GetCellDSByKey(key).components} column={c} row={r} />);
        }
    }

    function GetCellDSByKey(key: string): CellDS {
        return gameState.cells.find(v => v.key == key) as CellDS;
    }



    function SpawnGameComponent(key: string, comp: GameComponent) {
        GetCellDSByKey(key).components.push(comp);
        setGameState(gameState);
    }

    function handleMoveButtonClick() {
        if (gameState.mode == Mode.normal) {
            setCurrentMode(Mode.move);
            gameState.mode = Mode.move;
        }
        else if (gameState.mode == Mode.move) {
            setCurrentMode(Mode.normal);
            gameState.mode = Mode.normal;
        }
    }

    function spawnPawn() {
        SpawnGameComponent("0_0", new GameComponent("mec"));
    }

    return (
        <>
            <div className="gameBoard">
                <div style={{ float: 'right', display: 'grid' }} className='controls'>
                    <Button onClick={handleMoveButtonClick} text={currentMode == Mode.normal ? 'Move' : 'Cancel Move'}>
                    </Button>
                    <Button onClick={sendtoServer} text="sendtoServer"></Button>
                    <Button onClick={logWBState} text="logWBState"></Button>
                    <Button onClick={getClientList} text="getClientList"></Button>
                    <Button onClick={spawnPawn} text="Spawn Pawn"></Button>
                </div>
                <div className='grid'>{cells}</div>
            </div>

        </>
    )
}



