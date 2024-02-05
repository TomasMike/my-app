"use client";
import React, { Children, useEffect } from "react";
import { CellDS, GameComponentDS } from "../Classes/classes";
import { GlobalSettings } from "../page";
import { GameComponent } from "./GameComponent";


class blbosticka extends React.Component {
    render() {
        return (
            <div>
                ...some HTML...
            </div>
        );
    }
}

export function Cell(
    props: {
        cellDS: CellDS,
        key: string,
        text: string;
        row: number;
        column: number,
        clickHandler: (text: string) => void,
        //spawnComponent:(row:number,column:number,compToSpawn:GameComponent)=>void,
        components: GameComponentDS[]
    }) {


    const comps: React.JSX.Element[] = [];

    props.components.forEach(function (c, i) {
        comps.push(<GameComponent component={c} key={i} />);
    });

    function GetTop(): string {
        let value = props.row * ElementHeight();

        if (props.column % 2 != 0) value += Math.round(ElementHeight() / 2);

        return value + "px";
    }

    function Left(): string {
        return Math.round((props.column * ElementWidth() * 3) / 4) + "px";
    }

    function ElementHeight(): number {
        return InnerElementWidth();
    }

    function ElementWidth(): number {
        return GlobalSettings.size * 2;
    }

    function InnerElementWidth(): number {
        return Math.round(Math.sqrt(3) * GlobalSettings.size);
    }

    function InnerElementHeight(): number {
        return GlobalSettings.size;
    }

    function InnerComponentTop(): string {
        return Math.round(GlobalSettings.size * 0.4) + "px";
    }

    function InnerComponentLeft(): string {
        return Math.round(GlobalSettings.size * 0.15) + "px";
    }

    function BackgroundColor(): string {
        return "lightgreen";
    }

    function HandleClick() {
        props.clickHandler("Cell with id:[" + GetId() + "] called you.");
    }

    function GetId(): string {
        return props.column + "_" + props.row;
    }

    function GetCellColor(): string {
        return GlobalSettings.getCellStateColor(props.cellDS.cellState);
    }

    return (
        <div
            id={GetId()}
            className="hexagon flat"
            style={{
                top: GetTop(),
                left: Left(),
                height: ElementHeight() + "px",
                width: ElementWidth() + "px",

            }}
        >
            <div style={{ backgroundColor: BackgroundColor() }} className="hexText">
                {comps}
            </div>
            <div>
                <div
                    onClick={HandleClick}
                    className="h1"
                    style={{
                        width: InnerElementWidth(),
                        height: InnerElementHeight(),
                        top: InnerComponentTop(),
                        left: InnerComponentLeft(),
                    }}
                />
                <div
                    onClick={HandleClick}
                    className="h2"
                    style={{
                        width: InnerElementWidth(),
                        height: InnerElementHeight(),
                        top: InnerComponentTop(),
                        left: InnerComponentLeft(),
                    }}
                />
                <div
                    onClick={HandleClick}
                    className="h3"
                    style={{
                        width: InnerElementWidth(),
                        height: InnerElementHeight(),
                        top: InnerComponentTop(),
                        left: InnerComponentLeft(),
                    }}
                />
            </div>
        </div>
    );
}
