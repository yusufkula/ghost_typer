import React from "react";

const Word = (props) => {
    const { text, active, correct } = props

    return (
        <span className={active ? "activeWord" : ""}>{text} </span>
    )
}

export default Word