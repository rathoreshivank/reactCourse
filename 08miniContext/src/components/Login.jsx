import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const {setUser} = useContext(UserContext)

 //   sending data to contextProvider
  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username, password})
  };

return (
    <div>
        <h2 className="mb-4 ">Login</h2>
        <input
            type="text"
            value={username}
            onChange={(e) => {
                setUsername(e.target.value);
            }}
            placeholder="username"
            style={{ border: "1px solid black", padding: "5px" }}
            onMouseOver={(e) => (e.target.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.5)")}
            onMouseOut={(e) => (e.target.style.boxShadow = "none")}
        />
        {" "}
        <input
            type="password"
            value={password}
            onChange={(e) => {
                setpassword(e.target.value);
            }}
            placeholder="password"
            style={{ border: "1px solid black", padding: "5px" }}
            onMouseOver={(e) => (e.target.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.5)")}
            onMouseOut={(e) => (e.target.style.boxShadow = "none")}
        />
        <button
            onClick={handleSubmit}
            style={{ border: "1px solid black", padding: "5px 10px", cursor: "pointer" }}
            onMouseOver={(e) => (e.target.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.5)")}
            onMouseOut={(e) => (e.target.style.boxShadow = "none")}
        >
            Submit
        </button>
    </div>
);
}

export default Login;
