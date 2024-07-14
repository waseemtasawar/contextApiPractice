import React, { useContext } from "react";
import { ProfleUpdateContext } from "../store/MyContext";
const Profile = () => {
  const { user, updateUser } = useContext(ProfleUpdateContext);

  function handleUpdate() {
    updateUser({ name: "Ali Abbas", age: 40 });
  }
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default Profile;
