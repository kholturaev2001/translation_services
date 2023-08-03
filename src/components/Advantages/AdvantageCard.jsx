import TargetIcon from "../../assets/icons/TargetIcon";

const AdvantageCard = ({ title, txt }) => {
  return (
    <div className="flex space-between max-w-[370px] bg-[#F5F5F5] md:min-h-[200px] min-h-[145px] rounded-sm">
      <div className=" p-5 gap-2 flex flex-col">
        <p className="md:text-xl text-base text-[#24201F] font-semibold">
          {title}
        </p>
        <p className="md:text-[16px] text-sm">{txt}</p>
      </div>
      <div className="flex items-end w-[100px]">
        <TargetIcon />
      </div>
    </div>
  );
};

export default AdvantageCard;
