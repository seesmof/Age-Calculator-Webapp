const Button = ({ children, onClick }) => {
  const handleClick = () => {
    alert("You clicked the button!");
  };

  return (
    <button
      onClick={onClick}
      className="border border-neutral-600 rounded-md py-1 px-4 w-max"
    >
      {children}
    </button>
  );
};

export default Button;
