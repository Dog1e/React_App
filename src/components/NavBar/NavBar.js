import logo from '../HomeNav/checkLogo.png';

export default function NavBar(props) {
  return (
    <>
      <img src={logo} alt="Logo" />
      <button onClick={() => props.onFormSwitch('home')}>Log out</button>
    </>
  );
}
