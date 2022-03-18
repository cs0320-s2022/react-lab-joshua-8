import React from "react";

type TextBoxProps = {
    label: string;
    change: Function;
};

function TextBox(props: TextBoxProps) {
    return (
        <div className="TextBox">
            <div>
                <label> {props.label}
                    <input type={'text'} onChange={(event) => {
                        props.change(event.target.value)
                    }}/>
                </label>
            </div>
        </div>
    );
}

export default TextBox;
