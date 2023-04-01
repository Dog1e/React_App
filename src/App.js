import './styles.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import LoggedUser from './data/LoggedUser';
import { useState } from 'react';

export default function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (form) => {
    setCurrentForm(form);
  };
  return (
    <div className="App">
      {currentForm == 'login' ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}
