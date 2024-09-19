import React, { Suspense, useEffect, useRef, useState } from "react";
import TrophyCanvas from "./canvas/Trophy";
import "../styles/Loader.css";

const Loader = () => {
    return (
        <section className="loader-container">
            <TrophyCanvas />
            <div className="loader-text">
                Loading<span className="dot">.</span><span className="dot">.</span><span className="dot">.</span>
            </div>
        </section>
    );
};

export default Loader;