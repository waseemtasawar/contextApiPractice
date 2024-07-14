import { useState } from "react";
import Child1 from "./component/Child1";
import { MyContext, AuthContext } from "./store/MyContext";
import Auth from "./component/Auth";
// import GrandChild1 from "./component/GrandChild1";

function App() {
  // for set Name and Age this is some other component
  const [name, setName] = useState("Waseem Tasawar");
  const [age, setAge] = useState(23);

  // for Authentation  for some other component

  const [isisAuthenticated, setIsisAuthenticated] = useState(false);
  const login = () => setIsisAuthenticated(true);
  const logout = () => setIsisAuthenticated(false);
  return (
    // for name and Age

    // <MyContext.Provider value={{ name, age, setName, setAge }}>
    //   <Child1 />
    // </MyContext.Provider>

    // for Auth

    <AuthContext.Provider value={{ isisAuthenticated, login, logout }}>
      <Auth />
    </AuthContext.Provider>
  );
}

export default App;
