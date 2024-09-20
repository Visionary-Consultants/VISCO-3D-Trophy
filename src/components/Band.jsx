import React from "react";
import "../styles/Band.css";

const Band = () => {
    return (
        <section className={"band-container relative my-5 h-[300px]"}>
            <div className={"rotated-div items-center absolute content-center top-0 left-0 w-[120%] h-[133.53pxpx] bg-gradient-to-r from-[#93E3FCCC]/80 to-[#735DFFCC]/80 z-[1]"}>
                <div className={"scrolling-text flex whitespace-nowrap text-white font-normal text-[72.07px] uppercase"}>
                    <span>Personaliza </span>
                    <span> a tu medida </span>
                    <span> Personaliza </span>
                    <span> a tu medida </span>
                </div>
            </div>
            <div className={"rotated-div-mirror absolute items-center content-center top-0 left-0 w-[120%] h-[133.53pxpx] bg-gradient-to-r from-[#BDCBFD]/80 to-[#5844D7]/80 z-[0]"}>
                <div className={"scrolling-text flex whitespace-nowrap text-white font-normal text-[72.07px] uppercase"}>
                    <span>Personaliza </span>
                    <span> a tu medida </span>
                    <span> Personaliza </span>
                    <span> a tu medida </span>
                </div>
            </div>
        </section>
    );
};

export default Band;