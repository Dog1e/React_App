import './styles.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Api from './components/Api/Api';
import { useState } from 'react';

export default function App() {
  const [currentForm, setCurrentForm] = useState('login');

  // const routes = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Login />
  //   }
  // ]);
  const toggleForm = (form) => {
    setCurrentForm(form);
  };

  const content = () => {
    if (currentForm === 'login') {
      return <Login onFormSwitch={toggleForm} />;
    } else if (currentForm === 'register') {
      return <Register onFormSwitch={toggleForm} />;
    } else if (currentForm === 'logged') {
      return;
    }
  };

  return (
    <div className="App">
      {content()}
      {/* <button
        onClick={() =>
          console.log(JSON.parse(localStorage.getItem('loggedUser')))
        }
      >
        ShowLocalStorage
      </button> */}
      <Api />
    </div>
  );
}
