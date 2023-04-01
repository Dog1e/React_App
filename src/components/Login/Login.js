import Users from '../../data/Users';
import LoggedUser from '../../data/LoggedUser';
import { useState } from 'react';

export default function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loggedUser, setLoggedUser] = useState({
    id: null,
    username: null,
    email: null,
    password: null
  });

  const handleLogin = (e) => {
    e.preventDefault();
    for (let i = 0; i < Users.length; i++) {
      if (Users[i].username == username && Users[i].password == password) {
        setLoggedUser({
          id: Users[i].id,
          username: Users[i].username,
          email: Users[i].email,
          password: Users[i].password
        });
        break;
      }
    }
    console.log(loggedUser);
  };
  return (
    <>
      <form onSubmit={handleLogin}>
        Username
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
        />
        Password
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="**********"
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={() => props.onFormSwitch('register')}>
        Don't have account? Register here.
      </button>
    </>
  );
}
