const HomeNav = (props) => {
  return (
    <>
      <nav>
        <div></div>
        <button onClick={() => props.onFormSwitch('login')}>Login</button>
      </nav>
    </>
  );
};
export default HomeNav;
