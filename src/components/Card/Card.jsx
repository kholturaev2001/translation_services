const Card = ({ img, title, onClick }) => {
  return (
    <div className="flex flex-col w-[290px]">
      <img src={img} alt="" className=" h-[350px] object-cover " />
      <p className="bg-[#24201F] text-white text-base font-medium text-center py-3 w-full">
        {title}
      </p>
      <button
        onClick={onClick}
        className="border-2 border-[#EF6F2E] duration-500 ease-in-out text-base font-medium text-center py-3 w-full hover:bg-[#EF6F2E] hover:text-white"
      >
        Подробнее
      </button>
    </div>
  );
};

export default Card;
