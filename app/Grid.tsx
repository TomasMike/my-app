'use client';
import { useEffect, useState } from 'react';
import { Button } from './Components/Button';
import { CellDS, GameComponentDS, GameState, Mode } from './Classes/classes';
import { Cell } from './Components/Cell';
import React from 'react';
import { GlobalSettings } from './page';


export function Grid() {
    const [currentMode, setCurrentMode] = useState(Mode.normal);
    const [gameState, setGameState] = useState(new GameState());
    //const [cellsx, setCellX] = useState(gameState.cells);


    //#region websocket stuff
    //var ws_uri = "ws://localhost:8080";
    //let wb = new WebSocket(ws_uri);
    function sendtoServer(): void {
        // wb.send("hey");
    }

    function logWBState(): void {
        //console.log(wb.readyState);
        // 0	CONNECTING	Socket has been created. The connection is not yet open.
        // 1	OPEN	The connection is open and ready to communicate.
        // 2	CLOSING	The connection is in the process of closing.
        // 3	CLOSED	The connection is closed or couldn't be opened.
    }

    function getClientList(): void {
        // wb.send('{"type":"getClients"}');
    }

    // wb.onmessage = function (event) {
    //     //when something comes from the server
    //     console.log("some data came from ws: " + event.data);
    // };
    //#endregion
    function CellClick(text: string): void {
        console.info(text);
    }



    const cells = [];



    for (let c = 0; c < GlobalSettings.columnCount; c++) {
        for (let r = 0; r < GlobalSettings.rowCount; r++) {
            var key = c + "_" + r;

            cells.push(<Cell cellDS={GetCellDSByKey(key)} key={key} text='test' clickHandler={CellClick} components={GetCellDSByKey(key).components} column={c} row={r} />);
        }
    }

    function GetCellDSByKey(key: string): CellDS {
        return gameState.cells.find(v => v.key == key) as CellDS;
    }

    useEffect(() => {
        console.log("useeffect");
    });

    function SpawnGameComponent(key: string, comp: GameComponentDS) {

        var newState = window.structuredClone(gameState);
        newState.cells[gameState.cells.indexOf(GetCellDSByKey(key))].components.push(comp);

        setGameState(newState);
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
        SpawnGameComponent("0_0", new GameComponentDS("mec"));
    }
    function logGameState() {
        console.log(gameState);
    }

    function IsPawnInGame(): boolean {
        return gameState.cells.some((c) => c.components.some((c) => c.isPlayerMainCharacter));
    }

    return (
        <>
            <div className="gameBoard">

                <div className='controls'>
                    <div className="mainGameButtons">
                        <Button onClick={handleMoveButtonClick} text={currentMode == Mode.normal ? 'Move' : 'Cancel Move'}>
                        </Button>
                        <Button enabled={IsPawnInGame()} onClick={spawnPawn} text="Spawn Pawn"></Button>
                    </div>
                    <div className="DebugButtons">
                        <Button onClick={sendtoServer} text="sendtoServer"></Button>
                        <Button onClick={logWBState} text="logWBState"></Button>
                        <Button onClick={getClientList} text="getClientList"></Button>
                        <Button onClick={logGameState} text="logGameState"></Button>
                    </div>
                </div>
                <div className='grid'>{cells}</div>
            </div>
        </>
    );
}
