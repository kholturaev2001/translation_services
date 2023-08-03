const BackBtn = ({ children, ...rest }) => {
  return (
    <button
      className="md:max-w-[300px] max-w-[200px] border-2 border-[#EF6F2E] duration-500 ease-in-out md:text-base text-sm font-medium text-center md:py-3 py-2 hover:bg-[#EF6F2E] hover:text-white rounded-lg"
      {...rest}
    >
      {children}
    </button>
  );
};

export default BackBtn;
