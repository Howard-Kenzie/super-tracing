import React from "react";
import "./index.css";

const ButtonAtom = ({ content, action, style }) => {
    return (
        <button onClick={ action } className="buttonAtom" style={style}>{ content }</button>
    )
};

export default ButtonAtom;
