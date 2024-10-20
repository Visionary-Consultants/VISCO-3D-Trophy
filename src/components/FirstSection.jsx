import React from "react";
import Printer3dCanvas from "./canvas/Printer3D";
import "../styles/FirstSection.css";
import CardImg from "./CardImg";
import Img1 from "../assets/Cards/img1.jpeg";


const FirstSection = () => {
    return (
        <section className={"printer-container items-center flex flex-row ml-10 mt-16 w-full"}>
            <div className="flex flex-col w-[40%]">
                <div>
                    <p className={"text-[#1E34FF] text-end"}>Lorem ipsum dolor sit amet</p>
                    <p className={"text-[38.64px] text-left justify-start"}>
                        Lorem ipsum dolor sit amet, conse
                    </p>
                    <Printer3dCanvas />
                </div>
            </div>
            <div className="flex flex-col w-[60%]">
                <CardImg title={"Medic"} image={Img1} />
            </div>
        </section>
    );
};

export default FirstSection;