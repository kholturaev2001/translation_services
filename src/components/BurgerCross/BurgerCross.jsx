import "./BurgerCross.css";

const 
BurgerCross = ({ isActive }) => {
  return (
    <div
      className={`burger ${
        isActive ? "active" : ""
      } cursor-pointer w-10 z-40`}
    >
      <span></span>
    </div>
  );
};

export default BurgerCross;
