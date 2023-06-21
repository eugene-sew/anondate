import axios from "axios";
import { IoMdAdd } from "react-icons/io";
import swal from "sweetalert";

const storeUserInLocal = (data) => {
  window.localStorage.setItem("user", JSON.stringify(data));
};

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

const loginUser = async (userData) => {
  const url = import.meta.env.VITE_LOGIN_URL;
  const { username, password } = userData;

  console.log("login data: ", userData);
  let error = null;
  let data = null;
  const formData = new FormData();

  formData.append("email", username);
  formData.append("password", password);

  try {
    await axios
      .post(url, formData)
      .then((response) => {
        console.log("this is data ", response.data);
        if (response.data.success) {
          const newUser = response.data.user;

          console.log("user logged in", newUser);
          data = newUser;
          swal("Yourba", "Logged in ", "success");
        } else {
          const errorData = response.data.error;
          error = errorData;

          swal("Yourba", "error logging in \n \t " + errorData, "error");
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
export { createUser, loginUser };
