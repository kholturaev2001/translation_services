const Title2Colored = ({ children }) => {
  return (
    <div className="mx-3 ">
      <p className="md:text-base text-sm bg-gray-200  px-3 font-medium py-2 mx-auto md:max-w-[1000px] max-w-[100%]">
        {children}
      </p>
    </div>
  );
};

export default Title2Colored;
