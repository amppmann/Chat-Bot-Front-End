import React from "react";


export default function ChatBodyTyperWriterHeading() {
    return (
        <div className="text-3xl text-bold text-purple-600 mb-8 ml-8">
            <h1 className="typewriting">
                <a href="" className="typewrite text-purple-600" data-period="1000"
                    data-type='[ "Revolutionizing the way...", "Revolutionize the way you ..." ]'>
                    <span className="wrap"></span>
                </a>
            </h1>
        </div>
    );
}