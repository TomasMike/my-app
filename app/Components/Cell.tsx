"use client";
import React, { Children, useEffect } from "react";
import { CellDS, GameComponentDS } from "../Classes/Classes";
import { Utils } from "../Classes/Utils";
import { GameComponent } from "./GameComponent";
import GlobalSettings from "../Classes/GlobalSettings";

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
        id: string,
        row: number;
        column: number,
        clickHandler: (text: string) => void,
        components: GameComponentDS[],
    }) {

    const comps: React.JSX.Element[] = [];

    props.components.forEach(function (c, i) {
        comps.push(<GameComponent component={c} key={i} />);
    });

    function CellContainterElementTop(): string {
        var value: number;

        if (GlobalSettings.IsHexDisplayModeFlat()) {
            value = props.row * CellContainerElementHeight();

            if (props.column % 2 != 0) value += Math.round(CellContainerElementHeight() / 2);
        }
        else {
            value = Math.round((props.row * CellContainerElementHeight() * 3) / 4);
        }

        return value + "px";


    }

    function CellContainerElementLeft(): string {
        var value: number;

        if (GlobalSettings.IsHexDisplayModeFlat()) {
            value = Math.round((props.column * CellContainerElementWidth() * 3) / 4);
        }
        else {
            value = Math.round(props.column * CellContainerElementWidth());
            if (props.row % 2 != 0) value += Math.round(CellContainerElementWidth() / 2);
        }

        return value + "px";
    }

    function CellContainerElementHeight(): number {
        if (GlobalSettings.IsHexDisplayModeFlat()) {
            return InnerElementWidth();
        }
        else
            return GlobalSettings.Size * 2;
    }

    function CellContainerElementWidth(): number {
        if (GlobalSettings.IsHexDisplayModeFlat())
            return GlobalSettings.Size * 2;
        else
            return InnerElementWidth();
    }

    function InnerElementWidth(): number {
        return Math.round(Math.sqrt(3) * GlobalSettings.Size);
    }

    function InnerElementHeight(): number {
        return GlobalSettings.Size;
    }

    function InnerComponentTop(): string {
        if (GlobalSettings.IsHexDisplayModeFlat())
            return Math.round(GlobalSettings.Size * 0.37) + "px";
        else
            return Math.round(GlobalSettings.Size * 0.5) + "px";
    }

    function InnerComponentLeft(): string {
        if (GlobalSettings.IsHexDisplayModeFlat())
            return Math.round(GlobalSettings.Size * 0.11) + "px";
        else
            return Math.round(GlobalSettings.Size * -0.01) + "px";
    }

    function HandleClick() {
        props.clickHandler("Cell with id:[" + props.id + "] called you.");
    }

    function GetText(): string {
        return props.cellDS.text + "-" + props.id;
    }

    function GetCellBackgroundColor(): string {
        return Utils.getCellStateColor(props.cellDS.cellState);
    }

    return (
        <div
            id={props.id}
            className={GlobalSettings.IsHexDisplayModeFlat() ? "hexagon flat" : "hexagon pointy"}
            style={{
                top: CellContainterElementTop(),
                left: CellContainerElementLeft(),
                height: CellContainerElementHeight() + "px",
                width: CellContainerElementWidth() + "px",
                //backgroundColor: "red",
                //border: "solid black 1px"
            }}
        >
            <div className="hexText">
                {GetText()}
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
                        backgroundColor: GetCellBackgroundColor()
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
                        backgroundColor: GetCellBackgroundColor()
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
                        backgroundColor: GetCellBackgroundColor()
                    }}
                />
            </div>
        </div>
    );
}
