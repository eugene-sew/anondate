import { Link } from "react-router-dom";
import { profilePic } from "../assets";
import { decryptMessage } from "../util/util";

const ChatBubble = ({ message, isSentByCurrentUser, cid, url }) => {
  const timeString = new Date(message.createdAt)
    .toLocaleTimeString()
    .slice(0, -3);
  const baseUrl = import.meta.env.VITE_HOST;
  return (
    <div
      className={`chat ${
        isSentByCurrentUser
          ? "chat-end place-items-end"
          : "chat-start place-items-start"
      } w-fit`}>
      {!isSentByCurrentUser && (
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={baseUrl + url} />
          </div>
        </div>
      )}
      <div className="chat-bubble bg-gray-200 text-sm text-gray-700">
        {decryptMessage(message.content, cid)}
      </div>
      <div className="chat-footer opacity-50">
        <time className="text-xs opacity-50">{timeString}</time>
      </div>
    </div>
  );
};

export default ChatBubble;
