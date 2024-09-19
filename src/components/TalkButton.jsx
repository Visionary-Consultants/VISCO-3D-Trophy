const TalkButton = ({ onClick, isGradient, text, color_button }) => (
    <button onClick={onClick} className={`talk-button 
        ${isGradient
            ? "bg-gradient-to-r from-[#FFFFFF]/[76%] to-[#FFFFFF]/[10%]"
            : `${color_button}`}
            rounded-t-[25px] rounded-bl-[25px] 
            w-[150px] h-[48px] 
            transform rotate-[270deg] translate-x-[55px] translate-y-0 origin-center 
            border`} >
        <div className="talk-button__text">{text}</div>
    </button >
);

export default TalkButton;