const PhoneIcon = ({ color }) => {
  return (
    <svg
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.42266 8.91897C12.9908 5.34979 8.86285 4.5401 11.1338 2.26758C13.324 0.0767002 13.7629 -1.1825 16.5379 1.59331C16.8173 1.94101 20.1791 4.15014 12.4176 11.9138C4.65516 19.6784 2.44377 16.3186 2.09617 16.0391C-0.686559 13.2565 0.579974 12.8253 2.77024 10.6344C5.04213 8.36189 5.85448 12.4881 9.42266 8.91897Z"
        fill={color ? color : "#24201F"}
      />
    </svg>
  );
};

export default PhoneIcon;
