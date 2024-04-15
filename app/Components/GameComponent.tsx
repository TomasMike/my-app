import { GameComponentDS } from "../Classes/Classes"

export function GameComponent(props: { component: GameComponentDS }) {

    return (<div>{props.component.name}</div>);
}