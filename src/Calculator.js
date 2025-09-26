import React, { useState } from "react";
import Button from "./Button";
import './Calculator.css';

const KeyPadComponent = () => {
    const [text, setText] = useState("");

    const ClickHandle = (e) => {
        const value = e.target.value;
        if (value === "C") {
            setText("");
        } else if (value === "=") {
            try {
                setText(eval(text));
            } catch {
                setText("Error");
            }
        } else {
            setText(text + value);
        }
    };

    return (
        <div className="Calculator">
            <div className="screen-row">
                <input type="text" readOnly value={text} />
            </div>
            <div>
                <Button label="1" ClickHandle={ClickHandle} />
                <Button label="2" ClickHandle={ClickHandle} />
                <Button label="3" ClickHandle={ClickHandle} />
                <Button label="+" ClickHandle={ClickHandle} />
            </div>
            <div>
                <Button label="4" ClickHandle={ClickHandle} />
                <Button label="5" ClickHandle={ClickHandle} />
                <Button label="6" ClickHandle={ClickHandle} />
                <Button label="-" ClickHandle={ClickHandle} />
            </div>
            <div>
                <Button label="C" ClickHandle={ClickHandle} />
                <Button label="0" ClickHandle={ClickHandle} />
                <Button label="=" ClickHandle={ClickHandle} />
            </div>

            <div> <div>
                <Button label="Sqr" ClickHandle={() => setText((Number(text) ** 2).toString())} />
            </div>
            </div>
        </div>
    );
};

export default KeyPadComponent;
