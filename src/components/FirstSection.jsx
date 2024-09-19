import React from "react";
import Printer3dCanvas from "./canvas/Printer3D";
import "../styles/FirstSection.css";

const FirstSection = () => {
    return (
        <section className={"printer-container items-center flex flex-col justify-center"}>
            <Printer3dCanvas />
        </section>
    );
};

export default FirstSection;