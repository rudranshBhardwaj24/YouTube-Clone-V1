const Button = ({ name }) => {
  return (
    <div>
      <button className="bg-gray-400 p-2 m-2 rounded-lg text-gray-50">
        {name}
      </button>
    </div>
  );
};
export default Button;
