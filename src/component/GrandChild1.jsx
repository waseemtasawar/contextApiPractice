import { useContext } from "react";
import { MyContext } from "../store/MyContext";

const GrandChild1 = () => {
  const { name, age, setName, setAge } = useContext(MyContext);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleAgeChange(e) {
    setAge(e.target.value);
  }
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter new name"
      />
      <input
        type="number"
        value={age}
        onChange={handleAgeChange}
        placeholder="Enter new age"
      />
    </div>
  );
};

export default GrandChild1;
