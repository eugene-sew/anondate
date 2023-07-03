import axios from "axios";
import { IoMdAdd } from "react-icons/io";
import swal from "sweetalert";
import { useAuth } from "../context/auth";
import CryptoJS from "crypto-js";

// get user from local storage
const getuserFromLocal = () => {
  return JSON.parse(window.localStorage.getItem("user")) || null;
};

const createUser = async (userData, image) => {
  const url = import.meta.env.VITE_CREATE_URL;
  const { username, email, password, bio, dob, gender, location } = userData;
  let error = null;
  let data = null;
  const formData = new FormData();

  formData.append("name", username);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("bio", bio);
  formData.append("dob", dob);
  formData.append("gender", gender);
  formData.append("location", location);
  formData.append("profileImage", image);

  try {
    await axios
      .post(url, formData)
      .then((response) => {
        console.log("this is data ", response.data);
        if (response.data.success) {
          const newUser = response.data.user;

          console.log("New user created:", newUser);
          data = newUser;
          swal("Yourba", "Welcome to Yourba " + newUser.name, "success");
        } else {
          const errorData = response.data.error;
          error = errorData;
          console.error("Failed to create user:", errorData);
          swal("Yourba", "error creating account \n \t " + errorData, "error");
          // Handle error (e.g., show an error message)
        }
      })
      .catch((err) => {
        console.error("Failed to create user:", err);
      });
  } catch (error) {
    // Handle error (e.g., show an error message)
  }
  return { data, error };
};

// get all profiles
const fetchProfiles = async () => {
  let data = null;
  let error = null;
  const url = import.meta.env.VITE_PROFILES_URL;
  const { id } = getuserFromLocal();
  console.log(id, "user stored");
  try {
    await axios.get(url + "/" + id).then((response) => {
      if (response.data.success) {
        data = response.data.users;
      }
    });
  } catch (error) {
    console.log(error);
  }

  return { data, error };
};

const sendConnect = async (senderId, receiverId) => {
  let data = null;
  let error = null;
  const url = import.meta.env.VITE_HOST;
  try {
    const response = await axios.post(`${url}users/${receiverId}/like`, {
      senderId: senderId,
    });
    data = response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to send like");
  }
  return { data, error };
};

const sendMessage = async (conversationId, senderId, content, receiverId) => {
  const url = import.meta.env.VITE_ONE_URL + conversationId + "/messages";

  try {
    const response = await axios.post(url, {
      senderId,
      content,
      receiverId,
    });
    return response.data;
  } catch (error) {
    console.error("Error sending message:", error);
    swal("Yourba", "Error sending message: \n" + error, "error");
    throw new Error("An error occurred while sending the message");
  }
};

const decryptMessage = (e, cid) => {
  const decrypted = CryptoJS.AES.decrypt(e, cid).toString(CryptoJS.enc.Utf8);
  return decrypted;
};
export {
  createUser,
  fetchProfiles,
  getuserFromLocal,
  sendConnect,
  sendMessage,
  decryptMessage,
};
