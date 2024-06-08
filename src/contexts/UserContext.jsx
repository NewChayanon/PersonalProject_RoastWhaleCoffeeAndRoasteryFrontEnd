import { createContext, useEffect, useState } from "react";
import userApi from "../apis/user";
import { getAccessToken, removeAccessToken, setAccessToken } from "../utils/local-storage";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [isUser, setIsUser] = useState(null);

  const handleLogin = async (credentials) => {
    const res = await userApi.Login(credentials);
    // setToken
    setAccessToken(res.data.accessToken);
    const getUser = await userApi.getUser()
    setIsUser(getUser.data.user)
  };
  const handleLogout = () =>{
    removeAccessToken()
    setIsUser(null)
  }

useEffect(() => {
  const fetchUser = async () =>{
    try {
        if (getAccessToken()) {
            const res =await userApi.getUser()
            setIsUser(res.data.user)
        }
    } catch (error) {
        console.log(error)
    }
  }
  fetchUser()
}, [])


  return (
    <UserContext.Provider value={{ isUser,handleLogin,handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};
