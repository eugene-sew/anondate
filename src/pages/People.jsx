import { useEffect, useState } from "react";
import { ConnectNotification, ProfileCard } from "../components";
import { fetchProfiles, sendConnect } from "../util/util";
import { useAuth } from "../context/auth";
import swal from "sweetalert";

const PeoplePage = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [connecting, setConnecting] = useState(false);
  const [profiles, setProfiles] = useState([]);
  const [notify, setNotify] = useState(false);
  const [previousLikesReceived, setPreviousLikesReceived] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useAuth();

  const onConnect = (receiverId) => {
    setConnecting(true);
    // Connection logic here
    sendConnect(user.id, receiverId)
      .then((like) => {
        console.log("Like sent:", like);
        swal("Yourba Connect", "Connect request sent", "success");
      })
      .catch((error) => {
        console.error("Failed to send like:", error);
        // Handle the error
      });

    if (currentProfileIndex === profiles.length - 1) {
      return;
    }
    setCurrentProfileIndex((prevIndex) => prevIndex + 1);
  };

  const onSkip = () => {
    if (currentProfileIndex === profiles.length - 1) {
      return;
    }

    setCurrentProfileIndex((prevIndex) => prevIndex + 1);
  };

  const populateProfiles = async () => {
    const { data, error } = await fetchProfiles();
    setProfiles(data);
  };

  // Fetch new data every 5 minutes
  useEffect(() => {
    populateProfiles();

    const intervalId = setInterval(() => {
      populateProfiles();
    }, 5 * 60 * 1000); // 5 minutes in milliseconds

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    Pusher.logToConsole = false;

    var pusher = new Pusher("a728b9c53d826193a26d", {
      cluster: "eu",
    });

    var channel = pusher.subscribe("my-channel");

    channel.bind(user?.id, function (data) {
      console.log(data);
      setNotify(true);
    });

    return () => {
      setNotify(false);
    };
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-center px-4 py-8 gap-20 max-h-[800px] overflow-hidden  justify-center max-w-sm md:pb-24">
        {profiles &&
          profiles.map((profile, index) => {
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
        {notify && <ConnectNotification />}
      </div>
    </div>
  );
};

export default PeoplePage;
