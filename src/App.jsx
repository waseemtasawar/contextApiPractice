import { useState } from "react";
import Child1 from "./component/Child1";
import { MyContext, AuthContext, ProfleUpdateContext } from "./store/MyContext";
import Auth from "./component/Auth";
import Profile from "./component/Profile";
// import GrandChild1 from "./component/GrandChild1";

function App() {
  // for set Name and Age this is some other component
  // const [name, setName] = useState("Waseem Tasawar");
  // const [age, setAge] = useState(23);

  // for Authentation  for some other component

  // const [isisAuthenticated, setIsisAuthenticated] = useState(false);
  // const login = () => setIsisAuthenticated(true);
  // const logout = () => setIsisAuthenticated(false);

  // for uSer Profile

  const [user, setUser] = useState({ name: "Ali Raza", age: 23 });
  const updateUser = (newUser) => setUser(newUser);
  return (
    // for name and Age

    // <MyContext.Provider value={{ name, age, setName, setAge }}>
    //   <Child1 />
    // </MyContext.Provider>

    // for Auth

    // <AuthContext.Provider value={{ isisAuthenticated, login, logout }}>
    //   <Auth />
    // </AuthContext.Provider>

    // for Profile

    <ProfleUpdateContext.Provider value={{ user, updateUser }}>
      <Profile />
    </ProfleUpdateContext.Provider>
  );
}

export default App;
