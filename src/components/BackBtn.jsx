const BackBtn = ({ children, ...rest }) => {
  return (
    <button
      className="md:max-w-[300px] max-w-[200px] border-2 border-[#33a3ed] duration-500 ease-in-out md:text-base text-sm font-medium text-center md:py-3 py-2 hover:bg-[#33a3ed] hover:text-white rounded-lg"
      {...rest}
    >
      {children}
    </button>
  );
};

export default BackBtn;
