import Checked from "../../assets/icons/Checked";

const LiColored = ({ children }) => {
  return (
    <div className="mx-3 my-1">
      <div className="flex gap-3 md:max-w-[1000px] max-w-[100%] mx-auto md:text-base text-sm">
        <div>
          <Checked />
        </div>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default LiColored;
