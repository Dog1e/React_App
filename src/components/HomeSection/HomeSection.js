import '../../Styles/Main.css';
import '../../Styles/HomePage.css';

const HomeSection = (props) => {
  return (
    <>
      <section className="Section1">
        <div className="Section1__Place">
          <h2 className="Section1__Headline">Find your way home with Check!</h2>
          <p className="Section1__text">
            Set travel destination and know everything about this place
          </p>
          <button
            className="RegisterBtn2"
            onClick={() => props.onFormSwitch('register')}
          >
            Register
          </button>
        </div>
        <div className="Section1__Img"></div>
      </section>
      <section className="Section2">
        <div className="Section2__Box">
          <h2 className="Section2__Headline">Set</h2>
          <p className="Section2__text">
            Set up a checkpoint wherever in the world!
          </p>
        </div>
        <div className="Section2__Box">
          <h2 className="Section2__Headline">Set</h2>
          <p className="Section2__text">
            Set up a checkpoint wherever in the world!
          </p>
        </div>
        <div className="Section2__Box">
          <h2 className="Section2__Headline">Set</h2>
          <p className="Section2__text">
            Set up a checkpoint wherever in the world!
          </p>
        </div>
      </section>
      <section></section>
    </>
  );
};
export default HomeSection;
