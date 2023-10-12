const Card = ({ img, title, onClick }) => {
  return (
    <div className="flex flex-col shadow-lg">
      <img src={img} alt="" className="h-full w-[290px] object-cover " />
      <p className="bg-[#55504f] text-white md:text-base text-sm font-medium flex items-center justify-center text-center py-3  w-[290px]">
        {title}
      </p>
      <button
        onClick={onClick}
        className="border-2 border-[#33a3ed] duration-500 ease-in-out md:text-base text-sm font-medium text-center py-3 w-full hover:bg-[#33a3ed] hover:text-white"
      >
        Подробнее
      </button>
    </div>
  );
};

export default Card;


/* 


const Card = ({ img, title, onClick }) => {
  return (
    <div className="flex flex-col">
      <img src={img} alt="" className=" md:h-[350px] h-[310px] w-[290px] object-cover " />
      <p className="bg-[#55504f] text-white md:text-base text-sm font-medium text-center py-3 w-full">
        {title}
      </p>
      <button
        onClick={onClick}
        className="border-2 border-[#33a3ed] duration-500 ease-in-out md:text-base text-sm font-medium text-center py-3 w-full hover:bg-[#33a3ed] hover:text-white"
      >
        Подробнее
      </button>
    </div>
  );
};

export default Card;


*/
