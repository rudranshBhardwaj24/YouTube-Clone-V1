import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../utils/chatSlice";
import { useEffect, useState } from "react";
import { generate, generateQuotes } from "../utils/helper";
const LiveChat = () => {
  const [chatSpeed, setChatSpeed] = useState(2000);
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generate(),
          message: generateQuotes(),
        }),
        console.log("API Called")
      );
    }, chatSpeed);

    return () => clearInterval(i);
  }, [chatSpeed]);

  return (
    <>
      <div className="bg-gray-600 rounded-t-lg">
        <span className="flex justify-center gap-24">
          <button
            className="text-gray-100"
            onClick={() => {
              setChatSpeed(6000);
              console.log(chatSpeed);
            }}
          >
            Slow Mode
          </button>
          <button
            className="text-gray-100"
            onClick={() => {
              setChatSpeed(2000);
              console.log(chatSpeed);
            }}
          >
            Fast Mode
          </button>
        </span>
      </div>
      <div className="border border-black w-full h-[518px] bg-slate-200 overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, index) => (
            <ChatMessage name={c.name} message={c.message} key={index} />
          ))}
        </div>
      </div>
      <form
        className="flex justify-center border border-black bg-gray-600 rounded-b-lg"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Rudransh Bhardwaj",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          value={liveMessage}
          type="text"
          className="border border-black p-2 m-2 w-60 rounded-lg"
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFKdvNxS5z42nQl2oGuyIKUQMvRtJC7hQXmw&usqp=CAU"
            className="h-10 w-10 items-center flex justify-center"
          ></img>
        </button>
      </form>
    </>
  );
};
export default LiveChat;
