import Users from "../../data/Users";
import { useState } from "react";

export default function Login() {
  const [loginData, setLoginData] = useState({
    username: null,
    password: null
  });
  const handleUsername = (event) => {
    loginData.username = event.target.value;
  };

  const handlePassword = (event) => {
    loginData.password = event.target.value;
  };
  return (
    <>
      <div>Login Page</div>
      Username
      <input type="input" onChange={handleUsername} />
      Password
      <input type="password" onChange={handlePassword} />
      <button
        onClick={() => {
          for (let i = 0; i < Users.length; i++) {
            if (
              Users[i].username == loginData.username &&
              Users[i].password == loginData.password
            ) {
              setLoginData(Users[i].username, Users[i].password);
              console.log(loginData);
              console.log(Users[i]);
              break;
            }
          }
        }}
      >
        Zaloguj
      </button>
      <button>Don't have an account? Register here.</button>
    </>
  );
}
