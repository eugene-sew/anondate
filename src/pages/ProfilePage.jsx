import { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import {
  FaUserTag,
  FaCalendar,
  FaMailBulk,
  FaGenderless,
} from "react-icons/fa";
import { ProfileCard } from "../components";
import { logo, profilePic } from "../assets";
import { getuserFromLocal } from "../util/util";

const ProfilePage = () => {
  const [username, setUsername] = useState("JohnDoe");
  const [emaill, setEmail] = useState("johndoe@gmail.com");
  const [dateob, setDob] = useState("21st May , 2002");

  const [profilePicture, setprofilePicture] = useState(null);
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [bioo, setBio] = useState(
    "Fullstack developer with the stacks, looking for a peng tin"
  );
  const pref = [
    "Preference 1",
    "Preference 2",
    "Preference 3",
    "Preference 4",
    "Preference 5",
  ];
  const [preferences, setPreferences] = useState(pref);
  const baseUrl = import.meta.env.VITE_HOST;
  const { name, profileImageUrl, dob, email, gender, bio } = getuserFromLocal();
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAvatarChange = (event) => {
    setAvatar(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handlePreferencesChange = (event) => {
    const selectedPreferences = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setPreferences(selectedPreferences);
  };

  const handleUpdateProfile = (event) => {
    event.preventDefault();
    // Perform update profile logic here
    console.log("Profile updated!");
  };

  const handleDeleteBio = () => {
    setBio("");
  };

  const handleDeletePreferences = () => {
    setPreferences([]);
  };

  const dateTimeString = dob || new Date();
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

  return (
    <div className="flex flex-col items-center bg-gray-200 h-fit px-4 py-4 gap-3">
      <h1 className="w-full font-bold text-xl">My Profile</h1>
      <div className="bg-white h-fit  w-full flex justify-center relative py-10 rounded-3xl">
        <div className="flex flex-col gap-3 items-center">
          <img
            src={baseUrl + profileImageUrl}
            alt="profile-pic"
            className=" rounded-full ring-2 object-cover ring-brand profile-pic"
          />
          <h1 className="font-semibold text-gray-800 tracking-wide">{name}</h1>
        </div>
        <div className="absolute right-2 top-2">
          <button className="bg-cta bg-opacity-20 p-2 rounded-full hover:bg-opacity-30">
            <FiEdit2 />
          </button>
        </div>
      </div>

      {/* bio */}
      <div className="w-full bg-white text-gray-700 rounded-xl shadow px-4 py-3">
        <div className="w-full flex items-center justify-between gap-3 mb-2 border-b-2 border-cta border-opacity-25">
          <span className="block text-xs text-gray-400">Bio</span>
          <span>
            <FaUserTag className="w-5 h-5 text-gray-300" />
          </span>
        </div>
        <span>{bio}</span>
      </div>

      {/* dob*/}
      <div className="w-full bg-white text-gray-700 rounded-xl shadow px-4 py-3">
        <div className="w-full flex items-center justify-between gap-3 mb-2 border-b-2 border-cta border-opacity-25">
          <span className="block text-xs text-gray-400">Date of birth</span>
          <span>
            <FaCalendar className="w-5 h-5 text-gray-300" />
          </span>
        </div>
        <span>{formattedDate}</span>
      </div>

      {/* mail */}
      <div className="w-full bg-white text-gray-700 rounded-xl shadow px-4 py-3">
        <div className="w-full flex items-center justify-between gap-3 mb-2 border-b-2 border-cta border-opacity-25">
          <span className="block text-xs text-gray-400">Mail</span>
          <span>
            <FaMailBulk className="w-5 h-5 text-gray-300" />
          </span>
        </div>
        <span>{email}</span>
      </div>

      {/* gender */}
      <div className="w-full bg-white text-gray-700 rounded-xl shadow px-4 py-3">
        <div className="w-full flex items-center justify-between gap-3 mb-2 border-b-2 border-cta border-opacity-25">
          <span className="block text-xs text-gray-400">Gender</span>
          <span>
            <FaGenderless className="w-5 h-5 text-gray-300" />
          </span>
        </div>
        <span>{gender}</span>
      </div>

      <div className="w-full bg-white text-gray-700 rounded-xl shadow px-4 py-3">
        <div>
          <div className="w-fit flex itfull-center gap-3 mb-2 justify-between border-b-2 border-cta border-opacity-25">
            <span className="block text-xs text-gray-400">Preferences</span>
            <span>
              <FaGenderless className="w-5 h-5 text-gray-300" />
            </span>
          </div>
          <div className="flex flex-wrap">
            {preferences.map((preference, index) => (
              <span
                key={index}
                className="bg-cta bg-opacity-20 text-gray-700 px-3 py-1 text-sm rounded-full mr-2 mt-2">
                {preference}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
