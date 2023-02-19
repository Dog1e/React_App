var Users = [
  {
    username: "Admin",
    email: "admin@gmail.com",
    password: "qwerty"
  }
];

export default function Login() {
  const temp = { username: null, password: null };
  const handleUsername = (event) => {
    temp.username = event.target.value;
  };

  const handlePassword = (event) => {
    temp.password = event.target.value;
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
              Users[i].username === temp.username &&
              Users[i].password === temp.password
            ) {
              console.log(temp);
            }
          }
        }}
      >
        Zaloguj
      </button>
    </>
  );
}
