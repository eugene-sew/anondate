import { logo, message, profilePic } from "../assets";
import { RiMessage3Fill } from "react-icons/ri";
import { FaUserSecret } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../context/auth";
const MainLayout = () => {
  const { user, logout } = useAuth();
  const baseUrl = import.meta.env.VITE_HOST;

  return (
    <div className="w-screen h-screen overflow-hidden">
      <nav className="flex justify-between px-5 items-center relative">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="">
            <img
              src={baseUrl + user.profileImageUrl}
              alt="user profile img"
              className="w-8 h-8 ring-2 ring-cta rounded-full object-cover"
            />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-5  z-30 rounded-box w-52  flex flex-col gap-5 shadow glass">
            <Link
              to={"/profile"}
              className="flex gap-5  items-center w-full ">
              <img
                src={baseUrl + user?.profileImageUrl}
                alt="person image"
                className="w-8 h-8 object-cover rounded-full shadow ring-2 ring-cta"
              />
              <h1 className="font-semibold">My Profile</h1>
            </Link>
            <button
              onClick={logout}
              className="btn btn-outline border-red-600 text-red-600 md:bg-cta">
              logout
            </button>
          </ul>
        </div>
        <Link
          className="flex flex-col items-center"
          to={"/meet"}>
          <img
            src={logo}
            alt="logo"
            className="w-16"
          />
          <span className="appname text-xs ">Yourba</span>
        </Link>
        <Link
          className=""
          to={"/connects"}>
          <img
            src={message}
            alt="message icon"
            className="w-8 h-8  object-cover"
          />
        </Link>
      </nav>
      <div className="sm:px-4 mt-3 bg-gray-100 h-screen overflow-hidden overflow-y-scroll ">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
