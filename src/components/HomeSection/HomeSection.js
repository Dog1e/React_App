import '../../Styles/Main.css';
import '../../Styles/HomePage.css';
import miasto from '../../Styles/miasto.png';

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
        <div
          className="Section1__Img"
          style={{ backgroundImage: `url(${miasto})` }}
        ></div>
      </section>
      <section className="Section2">
        <div className="Section2__Box">
          <h2 className="Section2__Headline">Set</h2>
          <p className="Section2__text">
            Set up a checkpoint wherever in the world!
          </p>
        </div>
        <div className="Section2__Box">
          <h2 className="Section2__Headline">Check</h2>
          <p className="Section2__text">
            Check weather conditions of any place you like!
          </p>
        </div>
        <div className="Section2__Box">
          <h2 className="Section2__Headline">Mark</h2>
          <p className="Section2__text">
            Get access to as many checkpoints as you like with our account
            system
          </p>
        </div>
      </section>
      <section></section>
    </>
  );
};
export default HomeSection;
