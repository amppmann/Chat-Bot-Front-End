import React from "react";
import sendVectorIcon from "../image";

export default function SendButtonIcon() {
    return (
        <button className="bg-blue-400 w-10 h-10 rounded-full inline-block bg-gradient-to-r from-violet-600 to-indigo-500 flex justify-center items-center hover:-translate-y-0.5 duration-300 hover:bg-opacity-90">
            <span className="inline-block align-text-bottom">
                <img src={sendVectorIcon} />

            </span>
        </button>
    );
}