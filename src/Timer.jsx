import React, { useEffect, useState } from "react";

const Timer = (props) => {
    const [timeElapsed, setTimeElapsed] = useState(0)

    useEffect(() => {
        if (props.startCounting) {
            setInterval(() => {
                setTimeElapsed((prevTime) => prevTime + 1);
            }, 1000)
        }

    }, [props.startCounting])

    return (
        <div>
            <h4 className="text-light">Time: {timeElapsed}</h4>
            <h4 className="text-light">Speed: {speed}</h4>
        </div>
    )
}

export default Timer