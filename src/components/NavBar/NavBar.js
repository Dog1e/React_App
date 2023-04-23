import logo from '../HomeNav/checkLogo.png';

export default function NavBar(props) {
  return (
    <div className="NavBar">
      <img src={logo} alt="Logo" />
      <button
        className="RegisterBtn"
        onClick={() => props.onFormSwitch('home')}
      >
        Log out
      </button>
    </div>
  );
}
