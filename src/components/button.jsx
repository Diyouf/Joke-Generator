
const Button = (prop) => {
  return (
    <div>
      <button onClick={prop.handleAction}  className="bg-red-400 rounded-md p-2 mt-8 font-medium text-white">
        Genarate
      </button>
    </div>
  );
};

export default Button;
