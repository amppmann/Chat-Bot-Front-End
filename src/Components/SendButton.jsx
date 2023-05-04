import React from "react";
import sendVectorIcon from "../image";

export default function SendButtonIcon(props) {
    return (
        <button type={props.type} className={props.className}>
            <span className="inline-block align-text-bottom">
                <img src={sendVectorIcon} />

            </span>
        </button>
    );
}