import { useState } from "react";
import { profiles } from "../assets";
import { ProfileCard } from "../components";

const PeoplePage = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [connecting, setConnecting] = useState(false);

  const onConnect = () => {
    setConnecting(true);
    // connection logic here
    setCurrentProfileIndex((prevIndex) => prevIndex + 1);
  };

  const onSkip = () => {
    if (currentProfileIndex === profiles.length - 1) return;
    setCurrentProfileIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="flex flex-col items-center px-4 py-8 gap-20 h-full overflow-hidden">
      {profiles.map((profile, index) => {
        if (index < currentProfileIndex) {
          return null;
        }

        if (index === currentProfileIndex) {
          return (
            <ProfileCard
              key={profile.id}
              user={profile}
              onConnect={onConnect}
              onSkip={onSkip}
              connecting={connecting}
            />
          );
        }

        return null; // Skip rendering upcoming profiles
      })}
    </div>
  );
};

export default PeoplePage;
