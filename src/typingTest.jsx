import React, { useState, useRef } from "react";


const getRandomText = () => `react bitcoin run ghost cyberpunk macbook 
linux develop tesla iphone coding world mars kick turn 
logitech keyboard follow come early work find 
make possible`.split(' ').sort(() => Math.random() > 0.5 ? 1 : -1)

const TypingTest = () => {
    const [userInput, setUserInput] = useState("")
    const text = useRef(getRandomText())


    return (
        <div>
            <input type="text"
                placeholder="Start typing here..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)} />
            <p className="text-light">{text.current.join(' ')}</p>
        </div>
    )
}

export default TypingTest