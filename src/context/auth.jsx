import axios from "axios";
import React, { createContext, useState, useEffect, useContext } from "react";
import swal from "sweetalert";

// Create the AuthContext
const AuthContext = createContext();

// Create a provider component for the AuthContext
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //   login user
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
            console.log(newUser);
            console.log("user logged in", newUser);
            data = newUser;
            setUser(newUser);
            localStorage.setItem("user", JSON.stringify(newUser));
            swal("Yourba", "You're in " + data.name, "success");
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

  // Function to log out the user
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    window.location.replace("#/login");
  };

  // Check for stored user data on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Create a context value object including the user, storeUser, and logout
  const contextValue = {
    user,
    logout,
    loginUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

// Custom hook to access the AuthContext
const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
