import React from "react";

const Word = (props) => {
    const { text, active, correct } = props

    if (correct === true) {
        return <span className="correct">{text} </span>
    }
    if (correct === false) {
        return <span className="incorrect">{text} </span>
    }
    if (active === true) {
        console.log(active)
        return <span className="activeWord">{text} </span>
    }
    return <span>{text} </span>
}

const MemoizedWord = React.memo(Word)



export default MemoizedWord