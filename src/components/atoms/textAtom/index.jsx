import React from "react";
import "./index.css"

const TextAtom = ({ content, style }) => {
    return (
        <p className="textAtom" style={ style }>
            { content }
        </p>
    )
};

export default TextAtom;
