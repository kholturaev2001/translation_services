const BackBtn = ({ children, ...rest }) => {
  return (
    <button
      className="w-[300px] border-2 border-[#EF6F2E] duration-500 ease-in-out text-base font-medium text-center py-3 hover:bg-[#EF6F2E] hover:text-white rounded-lg"
      {...rest}
    >
      {children}
    </button>
  );
};

export default BackBtn;
