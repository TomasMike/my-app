"use client";
import { GameComponent } from "../Classes/classes";
import { GlobalSettings } from "../page";

export function Cell(props: {key:string, text: string; row: number; column: number, func: (text: string) => void }) {
    const components: GameComponent[] = [];



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
        props.func("Cell with id:["+ GetId()+"] called you.");
    }

    function GetText(): string {
        return "";
        var text: string = "<span>";

        components.forEach(c => {
            text += c.name + ",";
        });
        text += "</span>";

        return text;
    }

    function GetId(): string {
        return props.column + "_" + props.row;
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
                {GetText()}
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
