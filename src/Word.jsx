import React, { useRef, useEffect } from "react";

const Word = (props) => {
    const { text, active, correct } = props
    const rerender = useRef(0)

    useEffect(() => {
        rerender.current++
    })

    if (correct === true) {
        return <span className="correct">{text}({rerender.current}) </span>
    }
    if (correct === false) {
        return <span className="incorrect">{text} </span>
    }
    if (active === true) {
        return <span className="activeWord">{text} </span>
    }
    return <span>{text} </span>
}

const MemoizedWord = React.memo(Word)



export default MemoizedWord