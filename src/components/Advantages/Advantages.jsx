import AdvantageCard from "./AdvantageCard";
import AdvantageArrowCard from "./AdvantageArrowCard";

const Advantages = () => {
  return (
    <div className="flex flex-col gap-[35px] mb-4 mt-8 mx-auto">
      <p className="text-center md:text-2xl text-[28px] font-medium">Наши Преимущества</p>
      <div className="flex md:flex-row lg:flex-nowrap md:flex-wrap flex-col items-center justify-center md:gap-0 gap-4">
        <AdvantageArrowCard
          title="Преимущество 1"
          txt="Предоставлять клиентам превосходное качество и инновационные решения, отвечающие их потребностям."
        />
        <AdvantageArrowCard
          title="Преимущество 2"
          txt="Предоставлять клиентам превосходное качество и инновационные решения, отвечающие их потребностям."
        />
        <AdvantageCard
          title="Преимущество 3"
          txt="Предоставлять клиентам превосходное качество и инновационные решения, отвечающие их потребностям."
        />
      </div>
    </div>
  );
};

export default Advantages;
