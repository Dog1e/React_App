import './styles.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Api from './components/Api/Api';
import Map from './components/Map/Map';
import HomeNav from './components/HomeNav/HomeNav';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import HomeSection from './components/HomeSection/HomeSection';

import { useState } from 'react';

export default function App() {
  const [currentForm, setCurrentForm] = useState('home');

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
      return (
        <>
          <NavBar onFormSwitch={toggleForm} />
          <Api />
          <Map />
        </>
      );
    } else if (currentForm === 'home') {
      return (
        <>
          <HomeNav onFormSwitch={toggleForm} />
          <HomeSection onFormSwitch={toggleForm} />
        </>
      );
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
      <Footer />
    </div>
  );
}
