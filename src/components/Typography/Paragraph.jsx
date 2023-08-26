const Paragraph = ({ children }) => {
  return (
    <div className="mx-3">
      <p className="pt-5 pb-2 md:max-w-[1000px] max-w-[100%] mx-auto md:text-base text-sm">{children}</p>
    </div>
  );
};

export default Paragraph;
