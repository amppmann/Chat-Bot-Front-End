import React from "react";
import SendButtonIcon from "./SendButton";

export default function MainChatContainer() {
    return (
        <div className="chat-area flex flex-col min-h-screen md:relative">
            <div className="flex-3">
            </div>
            <div className="messages flex-1 overflow-auto">

                <div className="message mb-4 flex">
                    <div className="flex-2">

                    </div>
                    <div className="flex-1 px-2">
                        <div className="inline-block bg-gray-300 rounded-lg p-2 ml-6 px-6 text-gray-700 shadow-lg shadow-gray-500 typewriting hover:-translate-y-0.5 duration-300 cursor-pointer">
                            <span>Hello There! How may i help you..?</span>
                        </div>
                    </div>
                </div>

                <div className="message me mb-4 flex text-right typewriting">
                    <div className="flex-1 px-2 hover:-translate-y-0.5 duration-300 cursor-pointer">
                        <div className="inline-block bg-blue-600 rounded-lg shadow-lg shadow-gray-500 p-2 px-6 text-white">
                            <span>I accept. Thank you very much.</span>
                        </div>
                    </div>
                </div>
                <div className="message mb-4 flex">
                    <div className="flex-2">

                    </div>

                </div>
            </div>
            <div className="flex-1 md:fixed md:w-3/4 bottom-0 mt-0 mb-0 pt-4">



                <div className="write bg-white shadow flex rounded-lg">
                    <div className="flex-3 flex content-center items-center text-center p-4 pr-0">
                        <span className="block text-center text-gray-400 hover:text-gray-800">
                            <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                stroke="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                                <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                </path>
                            </svg>
                        </span>
                    </div>


                    {/* <!-- INPUT AREA  --> */}



                    <div className="flex-1">
                        <input name="message" className="w-full block outline-none px-4 py-4 bg-transparent typewriting " rows="1"
                            placeholder="Type a message..." autoFocus />
                    </div>


                    {/* EMOJI  */}
                    <div className="flex-2 w-32 p-2 flex content-center items-center">
                        <div className="flex-1 text-center">
                            <span className="text-gray-400 hover:text-gray-800">
                                <span className="inline-block align-text-bottom">
                                    <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                        <path
                                            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13">
                                        </path>
                                    </svg>
                                </span>
                            </span>
                        </div>
                        <div className="flex-1">


                            {/* BUTTON  */}

                            <SendButtonIcon />
                        </div>
                    </div>
                </div>




            </div>
        </div>
    )
}