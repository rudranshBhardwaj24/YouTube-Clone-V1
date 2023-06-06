import Button from "./Button";

const list = [
  "Music",
  "Gaming",
  "Tech",
  "Code",
  "Development",
  "Java",
  "JavaScript",
  "DSA",
];

const ButtonList = () => {
  return (
    <div className="sm:flex flex flex-wrap bg-gray-600 gap-6 p-2">
      {list.map((name, index) => (
        <Button name={name} key={index} />
      ))}
    </div>
  );
};
export default ButtonList;
