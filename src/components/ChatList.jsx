import ChatListItem from "./ChatListItem";
import { bot, conversation } from "../assets";
import { getuserFromLocal } from "../util/util";
import axios from "axios";
import { useEffect, useState } from "react";
import { ShimmerCategoryItem } from "react-shimmer-effects";
const ChatList = () => {
  // console.log(conversation);
  const [convo, setConvo] = useState([]);
  const { id } = getuserFromLocal();

  const fetchConvo = async () => {
    const url = import.meta.env.VITE_CONVO_URL;

    try {
      await axios.get(url + id + "/conversations").then((response) => {
        console.log(response.data.convo, 16);
        if (response.data.success) {
          setConvo(response.data.convo);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  // sort by last message time
  // const sortedConversation =
  //   convo.length > 0
  //     ? convo.sort((a, b) => {
  //         // const lastMessageA = a.messages[a.messages.length - 1];
  //         // const lastMessageB = b.messages[b.messages.length - 1];
  //         // const timeA = new Date(lastMessageA?.createdAt).getTime();
  //         // const timeB = new Date(lastMessageB?.createdAt).getTime();

  //         const timeA = new Date(a.createdAt).getTime();
  //         const timeB = new Date(b.createdAt).getTime();
  //         return timeB - timeA;
  //       })
  //     : [];
  // console.log("sorted convo", sortedConversation);

  useEffect(() => {
    fetchConvo();
  }, []);
  return (
    <div className="px-4 flex  flex-col gap-5 bg-gray-100 py-4 h-screen overflow-hidden overflow-y-scroll pt-7">
      {convo.length > 0 ? (
        convo.map((conv) => (
          <ChatListItem
            key={convo.id}
            data={conv}
          />
          // <h1 key={conv.id}>{conv.id}</h1>
        ))
      ) : (
        <div className="bg-white p-4 rounded-3xl">
          <ShimmerCategoryItem
            hasImage
            imageType="circular"
            imageWidth={30}
            imageHeight={30}
            title
          />
        </div>
      )}

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
