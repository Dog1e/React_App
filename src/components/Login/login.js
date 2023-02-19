import { useState } from "react";

var Users = [
  {
    username: "Admin",
    email: "admin@gmail.com",
    password: "qwerty"
  },
  {
    username: "User1",
    email: "user1@gmail.com",
    password: "12345"
  }
];

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
    </>
  );
}
