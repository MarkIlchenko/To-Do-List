import React from "react";
import {navLinks} from "../constans";
import {headerButtons} from "../constans/index";
import styles from "../components/HeaderButtons.css"

const HeaderButtons = () => {
    return (
        <div>
            {headerButtons.map((headerButtons, index) => (
                <a href={`#${headerButtons.id}`} className={`${headerButtons.class} ${index === headerButtons.length - 1 ? 'mrb-0' : 'mrb-2'}`}>
                    {headerButtons.title}
                </a>
            ))}
        </div>
    )
}

export default HeaderButtons;