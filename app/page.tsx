'use client';
import { MouseEventHandler, useState } from 'react';
import { Button } from './Components/Button';
import { GameState, Mode } from './Classes/classes'
import { Cell } from './Components/Cell';

export const GlobalSettings = {
    size: 50
};

const gameState = new GameState();

export default function Main() {
    const [currentMode, setCurrentMode] = useState(Mode.normal);

    return (
        <Grid currentMode={currentMode}  />
    )
}

export function Grid(props: { currentMode: Mode }) {

    var ws_uri = "ws://localhost:8080";
    let wb = new WebSocket(ws_uri);

    function CellClick(text: string): void {
        console.info(text);
    }

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

    wb.onmessage = function(event) {
        //when something comes from the server
        console.log("some data came from ws: " + event.data);
    };

    const rows = [];
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            rows.push(<Cell key={i + "_" + j} text='test' func={CellClick} column={i} row={j} />);
        }
    }

    function handleMoveButtonClick() {
        if (gameState.mode == Mode.normal) {
            //setCurrentMode(Mode.move);
            gameState.mode = Mode.move;
        }
        else if (gameState.mode == Mode.move) {
            // setCurrentMode(Mode.normal);
            gameState.mode = Mode.normal;
        }
    }

    return (
        <>
            <div className="gameBoard">
                <div style={{ float: 'right' }} className='controls'>
                    <Button onClick={handleMoveButtonClick} text={0 == Mode.normal ? 'Move' : 'Cancel Move'}>
                    </Button>
                    <Button onClick={sendtoServer} text="sendtoServer"></Button>
                    <Button onClick={logWBState} text="logWBState"></Button>
                    <Button onClick={getClientList} text="getClientList"></Button>
                </div>
                <div className='grid'>{rows}</div>
            </div>
        </>
    )
}



