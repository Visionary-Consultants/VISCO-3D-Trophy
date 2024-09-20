import React, { useEffect, useState } from "react";
import styles from '../styles';
import { navLinks, navLinks2 } from "../constants";
import '../styles/TopBar.css';
import TopBarLogo from '../assets/TopBar/topBarLogo.svg';
import CustomButton from "./CustomButton";
import TalkButton from "./TalkButton";

const TopBar = () => {
    const [active, setActive] = useState("");

    const scrollToSection = () => {
        const targetSection = document.getElementById('loader-container'); //todo: cambiar por el id de la sección
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="main-container flex flex-row w-full bg-nav-pattern h-[520px] bg-center bg-no-repeat bg-cover">
            <nav className={`${styles.paddingX} w-full py-1 top-0 z-20  flex-col`}>
                <div className="l-container">
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
                            <li className={`text-white text-[18px] font-medium h-9 content-center cursor-pointer`}>
                                <CustomButton text="Presupuesto" color1="bg-[#181B3C]" isGradient={false} color_button="bg-white" color_text="text-black" />
                            </li>
                        </ul>
                    </div>
                    <div className={`flex w-full items-center justify-between max-w-7xl ml-3`}>
                        <div className={`flex flex-col gap-3`}>
                            <h1 className={`text-white text-[80px] font-sans flex-auto leading-[80px] break-normal`}>Lorem ipsum dolor sit amet</h1>
                            <h1 className={`text-white text-[20px] font-sans flex-auto w-[311.62px] font-normal p-6`}>Lorem ipsum dolor sit amet, consectetur.</h1>
                        </div>
                        <h1 className={`text-white text-[80px] font-sans flex-none w-1/3 leading-[80px] text-right`}> sit amet, consectetur.</h1>
                    </div>
                    <div className={`flex  flex-row w-full items-center justify-between max-w-7xl ml-3 mt-2`}>
                        <CustomButton text="Cuéntanos tu idea" color1="bg-white" color2="bg-[#BDCBFD]" isGradient color_text="text-white" />
                        <ul className={`list-none hidden sm:flex flex-row gap-10`}>
                            {navLinks2.map((link) => (
                                <li key={link.id} className={`${active == link.title ? "text-white" : "text-gray-300"}
                        hover:text-white text-[18px] font-medium h-9 content-center cursor-pointer ${link.title.toLowerCase()}`} onClick={() => setActive(link.title)}>
                                    <a href={`#${link.id}`} className={`nav-link`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={`flex w-full justify-between max-w-7xl mt-2 h-[40px]`}>
                        <div className={`w-28 h-28  bg-white rounded-full ml-[50%] cursor-pointer`} onClick={scrollToSection}>
                            <div className={`w-28 h-20 text-center`} >
                                <span className={`arrow text-2xl font-bold`}>↓</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
            <div className={`r-container`}>
                <TalkButton text="¿HABLAMOS?" isGradient />
            </div>
        </div>
    );
};

export default TopBar;
