import { Link } from "react-router-dom";
import { profilePic } from "../assets";

const ChatBubble = ({ message, isSentByCurrentUser }) => {
  const timeString = new Date(message.createdAt)
    .toLocaleTimeString()
    .slice(0, -3);
  return (
    <div className={`chat ${isSentByCurrentUser ? "chat-end" : "chat-start"} `}>
      {!isSentByCurrentUser && (
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={profilePic} />
          </div>
        </div>
      )}
      <div className="chat-bubble bg-gray-200 text-sm text-gray-700">
        {message.content}
      </div>
      <div className="chat-footer opacity-50">
        <time className="text-xs opacity-50">{timeString}</time>
      </div>
    </div>
  );
};

export default ChatBubble;
