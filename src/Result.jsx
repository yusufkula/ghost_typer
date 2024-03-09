import React, { useState, useEffect } from "react";

const ResultPop = (props) => {
    const [isPopVisible, setPopVisible] = useState(false);
    const { speed, finished } = props;

    useEffect(() => {
        // Set pop visibility based on the 'finished' prop
        if (finished && !isPopVisible) {
            setPopVisible(true);
        }
    }, [finished, isPopVisible]);

    return (
        <div>
            {isPopVisible && (
                <div className="pop-screen">
                    <h1 className="Pop-screen-title">Results</h1>
                    <h2>{speed} WPM</h2>
                    <button onClick={() => window.location.reload()}>Restart</button>
                </div>
            )}
        </div>
    );
};

export default ResultPop;
