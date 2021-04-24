import React from 'react';

export interface ActionEditTextProps {
    value: string,
    actionText: string,
    onChange: (newValue: string) => void,
    onAction: () => void
}

function ActionEditText({
    value,
    actionText,
    onChange,
    onAction
}: ActionEditTextProps) {
    return (
        <div>
            <form onSubmit={(ev) => { ev.preventDefault(); onAction() }}>
                <input
                    value={value}
                    onChange={(ev) => onChange(ev.target.value)}
                />
                <button className="btn" type="submit">{actionText}</button>
            </form>
        </div>
    );
}

export default ActionEditText;