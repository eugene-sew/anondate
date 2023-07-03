import { profilePic } from "../assets";
import { GiLoveMystery } from "react-icons/gi";
import PropTypes from "prop-types";
import Preloader from "./preloader/Preloader";
import Connect from "./preloader/Connecting";

const ProfileCard = ({ user, onConnect, onSkip, connecting }) => {
  const { profileImageUrl, name, dob, bio, gender, id } = user;
  const baseUrl = import.meta.env.VITE_HOST;
  const calcAge = (b) => {
    const birthDate = new Date(b);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthDate;
    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
    const age = Math.floor(ageInMilliseconds / millisecondsPerYear);
    return age;
  };

  console.log(baseUrl + profileImageUrl);
  return (
    <>
      <div className="card w-full shadow-xl h-[550px] sm:h-full my-6  relative overflow-hidden transition duration-200 ease-in-out cursor-pointer select-none bg-white">
        <Preloader />

        <figure className="carousel">
          <img
            src={baseUrl + profileImageUrl}
            alt="person "
            className="carousel-item "
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <span className="text-xl font-semibold">{name}</span>
          </h2>
          <div className="text-gray-600 mb-4 flex flex-col">
            <div className="flex gap-3 font-light text-xs">
              <label className="text-gray-600 mb-2">Age: {calcAge(dob)}</label>
              <label>Gender: {gender}</label>
            </div>
            <p className="whitespace-pre-wrap w-full">
              <span className="font-semibold">Bio:</span> {bio}
            </p>
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={() => onConnect(id)}
              className="btn bg-cta border-0 outline-none text-white rounded-lg px-4 py-2 mr-2 flex items-center">
              <span>Connect</span>
              <span>
                <GiLoveMystery className="h-7 w-7" />
              </span>
            </button>
            <button
              onClick={() => onSkip(user)}
              className="btn btn-outline  text-gray-800 rounded-lg px-4 py-2">
              Skip
            </button>
          </div>
        </div>
        {connecting && <Connect />}
      </div>
    </>
  );
};

ProfileCard.defaultProps = {
  user: {
    username: "DevonK3",
    age: 22,
    bio: "Fullstack with stacks, looking for a peng thing",
  },
};
export default ProfileCard;
