const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="p-2 m-2 flex flex-col bg-gray-200 rounded-lg">
      <img
        className="w-6 h-6"
        src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
      ></img>
      <p className="font-bold">{name}</p>
      <p>{text}</p>
    </div>
  );
};
export default Comment;
