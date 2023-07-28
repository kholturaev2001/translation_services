import "./ScrollDown.css";

const ScrollDown = () => {
  return (
    <div className="relative">
      <div className="down_div_1 left-1/2 opacity-0 w-[30px] h-[30px] bg-transparent z-10 absolute translate-y-0 rotate-45 border-t-0 border-r-[3px] border-b-[3px] border-l-0 border-[#053093]"></div>
      <div className="down_div_2 left-1/2 opacity-0 w-[30px] h-[30px] bg-transparent z-10 absolute translate-y-0 rotate-45 border-t-0 border-r-[3px] border-b-[3px] border-l-0 border-[#053093]"></div>
    </div>
  );
};

export default ScrollDown;
