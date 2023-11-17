import Styles from "./styles.module.css";
import NavbarComponent from "../Navbar/Navbar";
import AnimatedPage from "../AnimatedPage/AnimatedPage";

const Home = () => {
  return (
    <AnimatedPage>
      <div className={Styles.home}>
        <NavbarComponent />
        <div className={Styles.text}>
          <h1>Interior Design</h1>
          <p>
            Design projects for residential and commercial spaces.
            <br /> Small architecture
          </p>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Home;
