const Attention = ({ title = "Важно!", desc }) => {
  return (
    <div className="mx-3 my-5">

    <div className=" p-3 rounded-md mx-auto md:max-w-[1000px] max-w-[100%] border border-[#33a3ed] bg-gray-100">
      <p className="font-medium mb-3 md:text-lg text-sm">{title}</p>
      <p className="md:text-base text-sm">
        <i>{desc}</i>
      </p>
    </div>
    </div>
  );
};

export default Attention;
