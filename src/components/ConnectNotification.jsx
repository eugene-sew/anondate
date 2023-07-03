import { useEffect, useState } from "react";
import { IoMdNotifications } from "react-icons/io";

const ConnectNotification = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer); // Clear the timeout when the component is unmounted or the dependency changes
    };
  }, []);
  return (
    <>
      {isLoading && (
        <div className="h-fit w-fit bg-white rounded-lg shadow-lg transition duration-300 ease-linear flex gap-5 absolute top-24 right-0 py-4 px-4">
          <IoMdNotifications className="w-6 h-6 text-cta" />
          <div>
            <span className="text-cta">Pending connects</span>
            <span className="block text-gray-400 text-xs">
              go yourba+ to view requests
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default ConnectNotification;
