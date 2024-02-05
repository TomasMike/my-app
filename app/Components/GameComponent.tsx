import { GameComponentDS } from "../Classes/classes"

export function GameComponent(props: { component: GameComponentDS }) {

    return (<div>{props.component.name}</div>);
}