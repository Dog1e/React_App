import '../../Styles/Main.css';
import '../../Styles/Navigation.css';
import logo from '../HomeNav/checkLogo.png';

const HomeNav = (props) => {
  return (
    <>
      <nav className="NavBar">
        <div>
          <img src={logo} alt="logo"></img>
        </div>
        <div>
          <button
            className="LoginBtn"
            onClick={() => props.onFormSwitch('login')}
          >
            Login
          </button>
          <button
            className="RegisterBtn"
            onClick={() => props.onFormSwitch('register')}
          >
            Register
          </button>
        </div>
      </nav>
    </>
  );
};
export default HomeNav;
