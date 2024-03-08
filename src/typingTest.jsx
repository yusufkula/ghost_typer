import React, { useState, useRef } from "react";
import getRandomText from "./RandomText";
import Word from "./Word";

const TypingTest = () => {
    const [userInput, setUserInput] = useState("")
    const text = useRef(getRandomText())
    const [activeWordIndex, setActiveWordIndex] = useState(0)

    const processInput = (value) => {
        if (value.endsWith(' ')) {
            setActiveWordIndex(i => i + 1);
            setUserInput("");
        } else {
            setUserInput(value)
        }
    }


    return (
        <div className=" typeArea">
            <div className="textArea">
                <h3 className="text-light">{text.current.map((word, index) => {
                    return (
                        <Word
                            text={word}
                            active={index === activeWordIndex}
                        />
                    )
                })}</h3>
            </div>
            <div className="inputArea">
                <input type="text"
                    className=""
                    placeholder="Start typing here..."
                    value={userInput}
                    onChange={(e) => processInput(e.target.value)} />
            </div>

        </div>
    )
}

export default TypingTest