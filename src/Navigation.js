import React from "react";
import {useState } from "react";
import { navLinks} from "./constans/index";
import styles from "./components/navigation.css";
import {logo} from "./img/index"
import HeaderButtons from "./components/HeaderButtons";

const Header = ()  => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="navbar">
            <img src={logo}/>

            <ul className="navigation">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`navigationItem ${index === navLinks.length - 1 ? 'mr-0' : 'mr-2'}`}
                    >
                        <a href={`#${nav.id}`} className="navigationLink">
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>

            <HeaderButtons />

        </nav>
    )
}

export default Header;
