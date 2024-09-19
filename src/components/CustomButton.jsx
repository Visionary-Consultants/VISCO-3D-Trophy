const CustomButton = ({ isGradient, text, color_button, color1, color2, color_text }) => {
    return (
        <button className={`
        flex h-9
        items-center justify-center
        content-center
        ${isGradient
                ? "bg-gradient-to-r from-[#FFFFFF]/60 to-[#FFFFFF]/20"
                : `${color_button}`}
        rounded-full
        border border-white border-opacity-[15%]`}>
            <span className={`ml-3 ${color_text}`}>{text}</span>
            <div className={`rounded-full ${color1} w-7 h-7 m-auto ml-2 mr-1 flex items-center justify-center content-center`}>
                <div className={`rounded-full ${color2} w-2.5 h-2.5 align-middle`} />
            </div>
        </button>
    );
}

export default CustomButton;
