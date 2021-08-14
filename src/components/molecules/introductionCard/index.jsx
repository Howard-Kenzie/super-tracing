import React from "react";
import TitleAtom from "../../atoms/titleAtom";
import TextAtom from "../../atoms/textAtom";
import { introductionText } from "../../articles";
import "./index.css";


const IntroductionCard = () => {
    return (
        <article className="introduction">
            {
                introductionText.map(({title, content, action}, key) => {
                    return (
                        <div key={key} className="introduction--introductionCard">
                            <TitleAtom content={title} style={{animation: `textFade ${key + 2}s`}}/>
                            <TextAtom content={content} style={{animation: `textFade ${key + 2}s`}}/>
                            {action && <action.Button content={action.content} style={{animation: `textFade ${key + 2}s`}}/>}
                        </div>
                    )
                })
            }
        </article>

    )
};

export default IntroductionCard;
