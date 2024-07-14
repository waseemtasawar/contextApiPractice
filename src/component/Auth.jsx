import { useContext } from "react";

import { AuthContext } from "../store/MyContext";

const Auth = () => {
  const { isisAuthenticated, login, logout } = useContext(AuthContext);
  return (
    <div>
      <p>{isisAuthenticated ? "Logged In" : "Logged Out"}</p>
      <button
        className="border-4 bg-stone-500"
        onClick={isisAuthenticated ? logout : login}
      >
        {isisAuthenticated ? "logout" : "login"}
      </button>
    </div>
  );
};

export default Auth;
