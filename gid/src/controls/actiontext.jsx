

function ActionText(props) {
    return (
        <div className="action-text">
            <div>
                <label>{props.label}</label>
            </div>
            <div>
                <input name={props.name} value={props.value} onChange={props.onChange} />
            </div>
        </div>
    );
}

export default ActionText;
