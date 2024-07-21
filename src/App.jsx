import { useState } from "react";
import Child1 from "./component/Child1";
import {
  MyContext,
  AuthContext,
  ProfleUpdateContext,
  CartContex,
} from "./store/MyContext";
// import Auth from "./component/Auth";
// import Profile from "./component/Profile";
// import GrandChild1 from "./component/GrandChild1";
import Cart from "./component/Cart";

function App() {
  // for set Name and Age this is some other component
  // const [name, setName] = useState("Waseem Tasawar");
  // const [age, setAge] = useState(23);

  // for Authentation  for some other component

  // const [isisAuthenticated, setIsisAuthenticated] = useState(false);
  // const login = () => setIsisAuthenticated(true);
  // const logout = () => setIsisAuthenticated(false);

  // for uSer Profile

  // const [user, setUser] = useState({ name: "Ali Raza", age: 23 });
  // const updateUser = (newUser) => setUser(newUser);

  // Add to cart and remove Items

  const [cart, setCart] = useState([]);

  const Additems = (items) => setCart([...cart, items]);
  const RemoveItems = (items) =>
    setCart(cart.filter((cartItem) => cartItem != items));

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

    // <ProfleUpdateContext.Provider value={{ user, updateUser }}>
    //   <Profile />
    // </ProfleUpdateContext.Provider>

    // for Add and Remove Itmes for Cart

    <CartContex.Provider value={{ cart, Additems, RemoveItems }}>
      <Cart />
    </CartContex.Provider>
  );
}

export default App;
