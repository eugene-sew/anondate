import { profilePic } from "../assets";
import { GiLoveMystery } from "react-icons/gi";
import PropTypes from "prop-types";
import Preloader from "./preloader/Preloader";
import Connect from "./preloader/Connecting";

const ProfileCard = ({ user, onConnect, onSkip, connecting }) => {
  const { avatar, username, age, bio } = user;
  // console.log(user);
  return (
    <>
      <div className="card w-full shadow-xl h-[550px] sm:h-full my-6  relative overflow-hidden transition duration-200 ease-in-out cursor-pointer select-none bg-white">
        <Preloader />

        <figure className="carousel">
          <img
            src={profilePic}
            alt="person "
            className="carousel-item "
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <span className="text-xl font-semibold mb-2">{username}</span>
            <p className="text-gray-600 mb-2">Age: {age}</p>
          </h2>
          <p className="text-gray-600 mb-4">Bio: {bio}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => onConnect(user)}
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
