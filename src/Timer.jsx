import React, { useEffect, useState } from "react";

const Timer = (props) => {
    const [timeElapsed, setTimeElapsed] = useState(0)
    const { correctWords, startCounting } = props

    useEffect(() => {
        var intervalID
        if (startCounting === true) {
            intervalID = setInterval(() => {
                setTimeElapsed((prevTime) => prevTime + 1);
            }, 1000)
        }
        return () => {
            clearInterval(intervalID)
        }


    }, [startCounting])

    const minute = timeElapsed / 60

    return (
        <div>
            <h4 className="text-light">Time: {timeElapsed}</h4>
            <h4 className="text-light">Speed: {(Math.round(correctWords / minute) || 0)} words per minute</h4>
        </div>
    )
}

export default Timer