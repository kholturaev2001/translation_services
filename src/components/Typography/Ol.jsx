const Ol = ({ children }) => {
    return (
      <div className="mx-3 mb-5">
      <ol className="list-decimal md:text-base text-sm  md:max-w-[1000px] max-w-[100%] mx-auto md:pl-10 pl-3 flex flex-col gap-2">
        {children}
      </ol>
      </div>
    );
  };
  
  export default Ol;
  