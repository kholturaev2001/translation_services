const TableContainer = ({ children }) => {
  return (
    <div className="w-full overflow-auto md:scale-100 scale-[90%]">
      {children}
    </div>
  );
};

export default TableContainer;
