const CustomButton = (props) => {
    return (
        <button className={`
        flex h-9
        items-center justify-center
        content-center
        bg-gradient-to-r from-[#FFFFFF]/60 to-[#FFFFFF]/20
        rounded-full
        border border-white border-opacity-[15%]`}>
            <span className={`ml-3 text-white`}>{props.text}</span>
            <div className={`rounded-full bg-white w-7 h-7 m-auto ml-2 mr-1 flex items-center justify-center content-center`}>
                <div className={`rounded-full bg-[#BDCBFD] w-2.5 h-2.5 align-middle`} />
            </div>
        </button>
    );
}

export default CustomButton;
