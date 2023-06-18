import { Link } from "react-router-dom";
import { logo } from "../assets";

const ChatListItem = ({ data }) => {
  const { messages, id, participants } = data;
  // change user id , get from context
  const userId = 1;
  const lastMsg = messages[messages.length - 1];
  console.log(lastMsg?.senderId);
  const timeString = new Date(lastMsg.createdAt).toLocaleTimeString();
  return (
    <Link
      className="w-full shadow rounded-xl  px-4 py-4 cursor-pointer bg-white flex gap-5"
      to={`${id}`}>
      <img
        src={logo}
        alt="logo"
        className={"w-9 h-9 rounded-full ring-2 ring-cta"}
      />
      <div className="">
        <h1 className="font-bold">Janic Doe</h1>
        <h1
          className={`${
            lastMsg?.senderId == userId ? "text-gray-500 msg_pre" : "text-cta"
          } text-xs`}>
          {lastMsg.content}
        </h1>
        <small className="text-xs opacity-50">{timeString}</small>
      </div>
    </Link>
  );
};

export default ChatListItem;
