import { createContext } from "react";

export const MyContext = createContext({
  name: "",
  age: 0,
  setName: () => {},
  setAge: () => {},
});

export const AuthContext = createContext({
  isisAuthenticated: false,
  login: () => {},
  logout: () => {},
});
