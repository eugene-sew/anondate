import { useNavigate, useParams } from "react-router-dom";
import VerifyPreloader from "../components/preloader/VerifyPreloader";
import { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const Verify = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  //   make an update request to server
  const url = import.meta.env.VITE_HOST + `verify-email/${id}`;
  const verify = async () => {
    await axios
      .get(url)
      .then((res) => {
        swal("Yourba Verification", "Verification Successful", "success");
        res.data.success && navigate("/login");

        setIsLoading(false);
      })
      .catch((err) => {
        swal("Yourba Verification", "Verification Failed, Try again", "error");
      });
  };

  useEffect(() => {
    verify();
  }, []);
  return (
    <div>
      <VerifyPreloader />
    </div>
  );
};

export default Verify;
