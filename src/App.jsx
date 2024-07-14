import { useContext, useState } from "react";
import Child1 from "./component/Child1";
import { MyContext } from "./store/MyContext";
// import GrandChild1 from "./component/GrandChild1";

function App() {
  const [name, setName] = useState("Waseem Tasawar");
  const [age, setAge] = useState(23);
  return (
    <MyContext.Provider value={{ name, age, setName, setAge }}>
      <Child1 />
    </MyContext.Provider>
  );
}

export default App;
