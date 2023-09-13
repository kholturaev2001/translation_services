const Img = ({ s_img }) => {
  return (
    <div className="mx-3 my-1">
      <div className="md:max-w-[1000px] max-w-[100%] mx-auto flex justify-center ">
        <img src={s_img} alt="" />
      </div>
    </div>
  );
};

export default Img;
