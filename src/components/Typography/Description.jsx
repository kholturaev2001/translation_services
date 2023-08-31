const Description = ({ children }) => {
  return (
    <div className="mx-3">
      <p className="mt-5 mb-4 mx-auto md:text-base text-sm md:max-w-[1000px] max-w-[100%]">
        {children}
      </p>
    </div>
  );
};

export default Description;
