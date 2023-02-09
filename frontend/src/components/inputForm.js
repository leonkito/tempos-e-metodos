import React from "react";

const InputForm = (props) => {
    // text, name,value,id, handleChange
    return (
        <div className="space-around group-form">
            <div className="input-box">
                <label htmlFor={props.id}>{props.text}</label>
                <input
                    type={props.type}
                    name={props.name}
                    id={props.id}
                    value={props.value}
                    onChange={props.handleChange}
                    className="input-form"
                />
            </div>
        </div>
    );
}
export default InputForm;