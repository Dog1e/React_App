import Users from '../../data/Users';
import { useState } from 'react';

export default function Register(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    let isValid = true;
    for (let i = 0; i < Users.length; i++) {
      if (Users[i].username === username || Users[i].email === email) {
        isValid = false;
        break;
      }
    }
    if (isValid) {
      Users.push({
        id: Users.length,
        username: username,
        email: email,
        password: password,
        locations: []
      });
      props.onFormSwitch('login');
    } else {
      alert('Użytkownik o podanych danych już istnieje');
    }
  };

  return (
    <>
      <form onSubmit={handleRegister}>
        Username
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
        />
        Email
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="example@gmail.com"
        />
        Password
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="**********"
        />
        <button type="submit">Register</button>
      </form>
      <button onClick={() => props.onFormSwitch('login')}>
        Already have an account? Login here.
      </button>
      {/* <button onClick={() => console.log(Users)}>ShowUsers</button> */}
    </>
  );
}
