import { useParams } from "react-router-dom";
import { conversation, logo, profilePic } from "../assets";
import ChatBubble from "./ChatBubble";
import { useEffect, useRef, useState } from "react";

const Chat = () => {
  const { id } = useParams();
  const [formValue, setFormValue] = useState("");
  const fieldRef = useRef();
  const current = conversation.filter((c) => c.id === id);

  const dateTimeString = current[0].createdAt;
  const date = new Date(dateTimeString);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  // Function to get the ordinal suffix for the day
  const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) {
      return "th";
    }
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const formattedDate = `${day}${getOrdinalSuffix(day)} ${month}, ${year}`;
  let messages = current[0].messages;

  //   sort the chat
  const sortedChat = messages
    .sort((a, b) => {
      const timeA = new Date(a.createdAt).getTime();
      const timeB = new Date(b.createdAt).getTime();

      return timeB - timeA;
    })
    .reverse();

  const sendMessage = () => {};
  const load = () => {
    fieldRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end", // Scroll to the bottom of the container
      inline: "nearest", // Keep the last message in view
    });
  };

  useEffect(() => load(), []);
  return (
    <div className="flex  flex-col  bg-white  h-screen overflow-hidden w-full">
      <header className="bg-gray-100 py-2 px-4 flex flex-row items-center gap-2">
        <div>
          <img
            src={profilePic}
            alt="avatar"
            className="w-9 h-9 rounded-full ring-2 shadow ring-cta object-cover"
          />
        </div>

        <div className="flex flex-col">
          <h1>Janice Doe</h1>
          <span className="text-xs">matched on: {formattedDate} </span>
        </div>
      </header>

      {/* chats */}
      <div className="px-4 h-full overflow-hidden py-4 overflow-y-scroll pb-40 relative">
        <div className="flex flex-col gap-2">
          {sortedChat.map((message, index) => (
            <ChatBubble
              key={index}
              message={message}
              isSentByCurrentUser={message.senderId === "1"} // Assuming "1" represents the current user's ID
            />
          ))}
          {sortedChat.map((message, index) => (
            <ChatBubble
              key={index}
              message={message}
              isSentByCurrentUser={message.senderId === "1"} // Assuming "1" represents the current user's ID
            />
          ))}
          {sortedChat.map((message, index) => (
            <ChatBubble
              key={index}
              message={message}
              isSentByCurrentUser={message.senderId === "1"} // Assuming "1" represents the current user's ID
            />
          ))}
          {sortedChat.map((message, index) => (
            <ChatBubble
              key={index}
              message={message}
              isSentByCurrentUser={message.senderId === "1"} // Assuming "1" represents the current user's ID
            />
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-brand py-1">
        <form
          onSubmit={sendMessage}
          className="row-span-1 flex flex-col px-3">
          <div className="self-end w-full h-12  flex flex-row items-center justify-between rounded-3xl pl-0 shadow  pr-1 bg-white py-5  overflow-hidden">
            <textarea
              type="text"
              onChange={(e) => setFormValue(e.target.value)}
              value={formValue}
              className="w-full text-gray-600 font-light px-5 py-2 text-sm h-10 outline-0 resize-none"
              placeholder="message here ..."
              multiple
            />

            <button
              type="submit"
              disabled={!formValue ? true : false}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="rotate-90 h-8 w-12 fill-cta cursor-pointer hover:text-sky-600 outline-none ">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
