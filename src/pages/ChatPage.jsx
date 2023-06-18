import { IoIosArrowBack } from "react-icons/io";
import { Link, Outlet, useLocation } from "react-router-dom";
import { logo } from "../assets";
import { ChatList } from "../components";
const ChatPage = () => {
  const path = useLocation();

  return (
    <div className="w-full h-screen">
      <header className="bg-brand w-full h-fit flex py-4 px-2 justify-between items-center fixed top-0">
        {path.pathname === "/connects" ? (
          <Link
            className="text-white font-bold flex  items-center"
            to={"/meet"}>
            <IoIosArrowBack className="w-8 inline" />
            <span className="font-light">Home</span>
          </Link>
        ) : (
          <Link
            className="text-white font-bold flex items-center"
            to={"/connects"}>
            <IoIosArrowBack className="w-8 inline" />
            <span className="font-light">Back</span>
          </Link>
        )}
        <h1 className="appname text-white text-3xl -ml-9">Yourba</h1>

        <Link to={"/meet"}>
          <img
            src={logo}
            alt=""
            className="w-8 h-8 rounded-full bg-white"
          />
        </Link>
      </header>
      <div className="h-full w-full pt-24 flex justify-center">
        <div className="h-full  rounded-t-3xl pt-0 overflow-hidden pb-10 w-full md:max-w-[500px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
