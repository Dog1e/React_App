import Users from '../../data/Users';
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

  const handleStorage = () => {
    if (loggedUser.id != null) {
      localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    for (let i = 0; i < Users.length; i++) {
      if (Users[i].username === username && Users[i].password === password) {
        setLoggedUser({
          id: Users[i].id,
          username: Users[i].username,
          email: Users[i].email,
          password: Users[i].password
        });
        props.onFormSwitch('logged');
        break;
      }
    }
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
        <input type="submit" onClick={handleStorage()} value="Login"></input>
      </form>
      <button onClick={() => props.onFormSwitch('register')}>
        Don't have account? Register here.
      </button>
      <button
        onClick={() =>
          console.log(JSON.parse(localStorage.getItem('loggedUser')))
        }
      >
        ShowLocalStorage
      </button>
    </>
  );
}
