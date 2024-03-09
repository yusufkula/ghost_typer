import React from "react";

const Word = (props) => {
    const { text, active, correct } = props

    if (correct === true) {
        return <span className="correct">{text} </span>
    }
    if (correct === false) {
        return <span className="incorrect">{text} </span>
    }
    if (active) {
        <span className="activeWord">{text} </span>
    }
    return <span>{text} </span>
}

export default Word