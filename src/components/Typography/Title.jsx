const Title = ({ children }) => {
  return (
    <div className="mx-3">
      <p className="md:text-2xl text-base font-medium py-2 mx-auto md:max-w-[1000px] max-w-[100%]">
        {children}
      </p>
    </div>
  );
};

export default Title;
