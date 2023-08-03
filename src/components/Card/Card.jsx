const Card = ({ img, title, onClick }) => {
  return (
    <div className="flex flex-col">
      <img src={img} alt="" className=" md:h-[350px] h-[310px] w-[290px] object-cover " />
      <p className="bg-[#24201F] text-white md:text-base text-sm font-medium text-center py-3 w-full">
        {title}
      </p>
      <button
        onClick={onClick}
        className="border-2 border-[#EF6F2E] duration-500 ease-in-out md:text-base text-sm font-medium text-center py-3 w-full hover:bg-[#EF6F2E] hover:text-white"
      >
        Подробнее
      </button>
    </div>
  );
};

export default Card;
