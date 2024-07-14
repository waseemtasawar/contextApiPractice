import { createContext } from "react";

export const MyContext = createContext({
  name: "",
  age: 0,
  setName: () => {},
  setAge: () => {},
});
