import AdvantageCard from "./AdvantageCard";
import AdvantageArrowCard from "./AdvantageArrowCard";

const Advantages = () => {
  return (
    <div className="flex flex-col gap-[35px] mb-4 mt-8">
      <p className="text-center text-2xl font-medium">Наши Преимущества</p>
      <div className="flex">
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
