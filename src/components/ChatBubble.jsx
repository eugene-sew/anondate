import { Link } from "react-router-dom";

const ChatBubble = ({ msg, id }) => {
  const filteredMessages = "";
  return (
    <Link to={`${id}`}>
      {msg.map((m) => (
        <h1>{m.senderId}</h1>
      ))}
    </Link>
  );
};

export default ChatBubble;
