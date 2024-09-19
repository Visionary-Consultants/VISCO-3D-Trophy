import React, { useEffect, useState } from "react";
import styles from '../styles';
import { navLinks, navLinks2 } from "../constants";
import '../styles/TopBar.css';
import TopBarLogo from '../assets/TopBar/TopBarLogo.svg';
import CustomButton from "./CustomButton";

const TopBar = () => {
    const [active, setActive] = useState("");

    return (
        <nav className={`${styles.paddingX} w-full py-1 top-0 z-20 bg-nav-pattern h-96 bg-center bg-no-repeat bg-cover flex-col `}
        >
            <div className={`flex w-full items-center justify-between max-w-7xl ml-3`}>
                <div className={`w-1/2 py-8`}>
                    <img src={TopBarLogo} alt="logo" className={"logo object-contain"} />
                </div>
                <ul className={`list-none hidden sm:flex flex-row gap-10`}>
                    {navLinks.map((link) => (
                        <li key={link.id} className={`${active == link.title ? "text-white" : "text-gray-300"}
                        hover:text-white text-[18px] font-medium h-9 content-center cursor-pointer ${link.title.toLowerCase()}`} onClick={() => setActive(link.title)}>
                            <a href={`#${link.id}`} className={`nav-link`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={`flex  flex-row w-full items-center justify-between max-w-7xl ml-3`}>
                <CustomButton text="Cuéntanos tu idea" />
                <ul className={`list-none hidden sm:flex flex-row gap-10`}>
                    {navLinks2.map((link) => (
                        <li key={link.id} className={`${active == link.title ? "text-white" : "text-gray-300"}
                        hover:text-white text-[18px] font-medium h-9 content-center cursor-pointer ${link.title.toLowerCase()}`} onClick={() => setActive(link.title)}>
                            <a href={`#${link.id}`} className={`nav-link`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default TopBar;
