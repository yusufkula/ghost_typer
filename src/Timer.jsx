import React, { useEffect, useState } from "react";
import ResultPop from "./Result";

const Timer = (props) => {
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [isGameFinished, setGameFinished] = useState(false);

    const { correctWords, startCounting } = props;

    useEffect(() => {
        var intervalID;
        if (startCounting === true) {
            intervalID = setInterval(() => {
                setTimeElapsed((prevTime) => prevTime + 1);
            }, 1000);
        }

        return () => {
            clearInterval(intervalID);
        };
    }, [startCounting]);

    useEffect(() => {
        const minute = timeElapsed / 60;
        const newSpeed = Math.round(correctWords / minute);
        setSpeed(newSpeed || 0);

        // Check if the game is finished based on your conditions
        if (props.allTyped === true) {
            setGameFinished(true);
        }
    }, [correctWords, timeElapsed, props.allTyped]);

    const handlePopClose = () => {
        setGameFinished(false);
        // You can perform additional actions when the pop-up is closed
    };

    return (
        <div>
            <h4 className="text-light">Time: {timeElapsed}</h4>
            <h4 className="text-light">Speed: <span className="speed">{speed} </span>wpm</h4>

            {/* Pass 'speed' and 'finished' as props to ResultPop */}
            <ResultPop speed={speed} finished={isGameFinished} onClose={handlePopClose} />
        </div>
    );
};

export default Timer;
