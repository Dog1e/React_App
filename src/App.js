import './styles.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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

  return <div className="App">{content()}</div>;
}
