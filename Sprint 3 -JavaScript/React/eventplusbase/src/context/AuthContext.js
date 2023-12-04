import { jwtDecode } from "jwt-decode";
import { createContext } from "react";

export const UserContext = createContext(null);

export const userDecodeToken = (theToken) => {
  const decoded = jwtDecode(theToken); //retornamentação da payload

  return {
    role: decoded.role,
    name: decoded.name,
    UserId: decoded.jti,
    token: theToken,
  };
};