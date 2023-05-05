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
    <div className="flex">
      {list.map((name, index) => (
        <Button name={name} key={index} />
      ))}
    </div>
  );
};
export default ButtonList;
