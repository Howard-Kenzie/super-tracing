import React from "react";
import "./index.css";

const TitleAtom = ({ content, style }) => {
    return (
        <h3 className="titleAtom" style={ style }>
            { content }
        </h3>
    )
};

export default TitleAtom;
