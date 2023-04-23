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
    <div className="LoginContainer">
      <form className="LoginForm" onSubmit={handleRegister}>
        Username
        <input
          className="LoginText"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
        />
        Email
        <input
          className="LoginText"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="example@gmail.com"
        />
        Password
        <input
          className="LoginText"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="**********"
        />
        <button className="LoginBtn" type="submit">
          Register
        </button>
      </form>
      <button
        className="RegisterBtn"
        onClick={() => props.onFormSwitch('login')}
      >
        Already have an account? Login here.
      </button>
      {/* <button onClick={() => console.log(Users)}>ShowUsers</button> */}
    </div>
  );
}
