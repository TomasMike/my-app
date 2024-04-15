export default function Logger(props:{lines: string[]}) 
{
    const logLines = props.lines.map((l,i) => <><span key={i}>{l}</span></>);

    return (<div className="logs">
        {logLines}
    </div>);
}