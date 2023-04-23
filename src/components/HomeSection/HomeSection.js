const HomeSection = (props) => {
  return (
    <>
      <section>
        <div>
          <h2>Find your way home with Check!</h2>
          <p>Set travel destination and know everything about this place</p>
          <button onClick={() => props.onFormSwitch('register')}>
            Register
          </button>
        </div>
      </section>
      <section>
        <div>
          <h2>Set</h2>
          <p>Set up a checkpoint wherever in the world!</p>
        </div>
      </section>
      <section></section>
    </>
  );
};
export default HomeSection;
