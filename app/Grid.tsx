'use client';
import { useEffect, useState } from 'react';
import { Button } from './Components/Button';
import { CellDS, CellState, GameComponentDS, GameState, Mode } from './Classes/classes';
import { Cell } from './Components/Cell';
import React from 'react';
import { GlobalSettings } from './GlobalSettings';


export function Grid() {
    const [currentMode, SetCurrentMode] = useState(Mode.normal);
    const [gameState, SetGameState] = useState(new GameState());
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

    for (let c = 0; c < GlobalSettings.ColumnCount; c++) {
        for (let r = 0; r < GlobalSettings.RowCount; r++) {
            var k = c + "_" + r;
            cells.push(<Cell
                cellDS={GetCellDSById(k)}
                key={k}
                id={k}
                clickHandler={CellClick}
                components={GetCellDSById(k).components}
                column={c}
                row={r}
            />);
        }
    }



    function GetCellDSById(id: string): CellDS {
        return gameState.cells.find(v => v.id == id) as CellDS;
    }

    useEffect(() => {
        console.log("useeffect");
    });

    function SpawnGameComponent(cellId: string, comp: GameComponentDS) {

        // var newState = window.structuredClone(gameState);
        // newState.cells[gameState.cells.indexOf(GetCellDSById(cellId))].components.push(comp);

        // SetGameState(newState);
        gameState.cells[gameState.cells.indexOf(GetCellDSById(cellId))].components.push(comp);
        UpdateGameState();
    }

    function UpdateGameState():void
    {
        var newState = window.structuredClone(gameState);
        //newState.cells[gameState.cells.indexOf(GetCellDSById(cellId))].components.push(comp);

        SetGameState(newState);
    }

    function HandleMoveButtonClick() {

        if (gameState.mode == Mode.normal) {
            SetMoveMode("0_0");
            SetCurrentMode(Mode.move);
            gameState.mode = Mode.move;
        }
        else if (gameState.mode == Mode.move) {
            SetCurrentMode(Mode.normal);
            gameState.mode = Mode.normal;
        }
    }

    function SetMoveMode(moveOriginCellId: string): void {
        var moveValue = 1;
        
        GetCellDSById(moveOriginCellId).text = "move from here";
        GetCellDSById(moveOriginCellId).cellState = CellState.actionOriginLocation;

        UpdateGameState();
    }



    function SpawnPawn() {
        SpawnGameComponent("0_0", new GameComponentDS("mec"));
    }
    function LogGameState() {
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
                        <Button enabled={!IsPawnInGame()} onClick={HandleMoveButtonClick} text={currentMode == Mode.normal ? 'Move' : 'Cancel Move'}>
                        </Button>
                        <Button enabled={IsPawnInGame()} onClick={SpawnPawn} text="Spawn Pawn"></Button>
                    </div>
                    <div className="DebugButtons">
                        <Button onClick={sendtoServer} text="sendtoServer"></Button>
                        <Button onClick={logWBState} text="logWBState"></Button>
                        <Button onClick={getClientList} text="getClientList"></Button>
                        <Button onClick={LogGameState} text="logGameState"></Button>
                    </div>
                </div>
                <div className='grid' style={{
                    position:"absolute",
                }}>{cells}</div>
            </div>
        </>
    );
}
