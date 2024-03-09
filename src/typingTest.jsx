import React, { useState, useRef } from "react";
import getRandomText from "./RandomText";
import Word from "./Word";
import Timer from './Timer'

const TypingTest = () => {
    const [userInput, setUserInput] = useState("")
    const text = useRef(getRandomText())
    const [activeWordIndex, setActiveWordIndex] = useState(0)
    const [correctWordArray, setCorrectWordArray] = useState([])
    const [startCounting, setStartCounting] = useState(false)

    const processInput = (value) => {

        setStartCounting(true)

        if (value.endsWith(' ')) {

            if (activeWordIndex === text.current.length) {
                setStartCounting(false)
                setUserInput('completed')
                return
            }

            setActiveWordIndex(i => i + 1);
            setUserInput("");

            const word = value.trim()
            setCorrectWordArray(data => {
                const newResult = [...data]
                newResult[activeWordIndex] = (word === text.current[activeWordIndex])
                return newResult
            })

        } else {
            setUserInput(value)
        }
    }

    console.log(activeWordIndex === text.current.length)

    return (
        <div className=" typeArea">
            <Timer
                startCounting={startCounting}
                correctWords={correctWordArray.filter(Boolean).length}
                allTyped={activeWordIndex === text.current.length}
            />
            <div className="textArea">
                <h3 className="text-light">{text.current.map((word, index) => {
                    return (
                        <Word
                            text={word}
                            active={index === activeWordIndex}
                            correct={correctWordArray[index]}
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