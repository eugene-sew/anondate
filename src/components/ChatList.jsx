import ChatListItem from "./ChatListItem";
import { bot, conversation } from "../assets";

const ChatList = () => {
  console.log(conversation);

  // sort by last message time
  const sortedConversation = conversation.sort((a, b) => {
    const lastMessageA = a.messages[a.messages.length - 1];
    const lastMessageB = b.messages[b.messages.length - 1];
    const timeA = new Date(lastMessageA.createdAt).getTime();
    const timeB = new Date(lastMessageB.createdAt).getTime();

    return timeB - timeA;
  });

  return (
    <div className="px-4 flex  flex-col gap-5 bg-gray-100 py-4 h-screen overflow-hidden overflow-y-scroll pt-7">
      {sortedConversation.map((convo) => (
        <ChatListItem
          key={convo.id}
          data={convo}
        />
      ))}
      <div className="w-full flex justify-end z-50 absolute right-2 bottom-7">
        <div className="bg-cta w-12 h-12 p-3 rounded-full shadow-lg cursor-pointer btn  border-0 outline-0">
          <img
            src={bot}
            alt=""
            className="invert"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatList;
