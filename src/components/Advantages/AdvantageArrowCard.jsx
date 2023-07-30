import TargetIcon from "../../assets/icons/TargetIcon";
import ArrowIcon from "../../assets/icons/ArrowIcon";

const AdvantageArrowCard = ({ title, txt }) => {
  return (
    <div className="flex items-center  ">
      <div className="flex space-between max-w-[430px] bg-[#F5F5F5] min-h-[200px] rounded-sm">
        <div className=" p-5 gap-2 flex flex-col">
          <p className="text-xl text-[#24201F] font-semibold">{title}</p>
          <p>{txt}</p>
        </div>
        <div className="flex items-end w-[100px]">
          <TargetIcon />
        </div>
      </div>
      <div className="w-[60px]">
        <ArrowIcon />
      </div>
    </div>
  );
};

export default AdvantageArrowCard;
