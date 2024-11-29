"use client";

const { createContext, useState } = require("react");

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
    contactNo: "",
    email: "",
  });
  const handleUserChanges = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const registerUser = async () => {
    try {
      const response = await fetch("/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });
      const data = await response.json();
      if (response.ok) {
        return true;
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    return false;
  };

  const login = async () => {
    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });
      const data = await response.json();
      if (response.ok) {
        setUserDetails(data.user);
        return true;
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    return false;
  };

  return (
    <UserContext.Provider
      value={{
        userDetails,
        setUserDetails,
        handleUserChanges,
        registerUser,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
