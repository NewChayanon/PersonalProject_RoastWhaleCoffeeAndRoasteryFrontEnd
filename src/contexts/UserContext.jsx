import { createContext, useState } from "react";
import userApi from "../apis/user";
import { setAccessToken } from "../utils/local-storage";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [isUser, setIsUser] = useState(null);
  const handleLogin = async (credentials) => {
    const res = await userApi.Login(credentials);
    // setToken
    setAccessToken(res.data.accessToken);
    setIsUser(true)
  };
  return (
    <UserContext.Provider value={{ isUser,handleLogin }}>
      {children}
    </UserContext.Provider>
  );
};
