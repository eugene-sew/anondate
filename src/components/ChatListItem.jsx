import { Link } from "react-router-dom";
import { logo, profilePic } from "../assets";
import { decryptMessage, getuserFromLocal } from "../util/util";

const ChatListItem = ({ data }) => {
  const { messages, participants } = data;
  const otherPerson = participants[0];
  const baseUrl = import.meta.env.VITE_HOST;

  const { id } = getuserFromLocal();
  const userId = id;
  const lastMsg = messages.length > 0 ? messages[messages.length - 1] : null;
  console.log(lastMsg?.senderId);
  const timeString =
    lastMsg != null &&
    new Date(lastMsg.createdAt).toLocaleTimeString().slice(0, -3);
  return (
    <Link
      className="w-full shadow rounded-xl  px-4 py-4 cursor-pointer bg-white flex gap-5 items-center"
      to={`${data.id}`}>
      <img
        src={baseUrl + otherPerson?.profileImageUrl}
        alt="logo"
        className={"w-9 h-9 rounded-full ring-2 ring-cta object-cover"}
      />
      <div className="">
        <h1 className="font-bold">{otherPerson?.name}</h1>
        {lastMsg != null && (
          <h1
            className={`${
              lastMsg?.senderId == userId ? "text-gray-500 msg_pre" : "text-cta"
            } text-xs`}>
            {decryptMessage(lastMsg.content, data.id)}
          </h1>
        )}
        <small className="text-xs opacity-50">
          {timeString ? timeString : "00:00"}
        </small>
      </div>
    </Link>
  );
};

export default ChatListItem;
