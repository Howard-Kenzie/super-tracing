import React from "react";
import { footerText } from "../../articles";
import "./index.css";

const FooterCard = () => {
    return (
        <div className="utilities">
            {
                footerText.map(({ title, links }, key) => {
                    return (
                        <section key={key} className="utilities--section">
                            <h4>{ title }</h4>

                            {
                                links.map(({ link, name }, key) => {
                                    return (
                                        <a href={ link } key={key} rel="noreferrer" target="_blank">{ name }</a>
                                    )
                                })
                            }
                        </section>

                    )

                })
            }
        </div>
    )
};

export default FooterCard;
