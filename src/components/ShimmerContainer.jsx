import Shimmer from "./Shimmer";
let arr = new Array(16);
arr.fill(1);
const ShimmerContainer = () => {
  return (
    <div className="flex flex-wrap justify-center items-center h-screen ">
      {arr.map((index) => (
        <Shimmer />
      ))}
    </div>
  );
};

export default ShimmerContainer;
