import Styles from "./styles.module.css";
import Image from "../../images/main-img.svg";
import { useState } from "react";
import Menu from "./Menu";
import AnimatedPage from "../AnimatedPage/AnimatedPage";
import ParticlesBackground from "../ParticlesBackground";

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatedPage>
      <div className={Styles.portfolio_main}>
        <ParticlesBackground />
        <div className={Styles.portfolio_div_1}>
          <div className={Styles.welcome}>
            <h1>Welcome.</h1>
            <div className={Styles.about}>
              <p>We are Gevorg and Anahit,the developers of this website.</p>
              <p>
                Here you can see our projects that were created with the
                knowledge we gained during this time.
              </p>
            </div>
          </div>
          <img src={Image} alt="" />
          <button
            className={Styles.projects_button}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={Styles.button__line__top}></span>
            <span className={Styles.button__line__right}></span>
            <span className={Styles.button__line__bottom}></span>
            <span className={Styles.button__line__left}></span>
            Our Projects
          </button>

          <div className={Styles.div_right}></div>
          <div className={Styles.div_left}></div>
        </div>
        <Menu isOpen={isOpen} />
      </div>
    </AnimatedPage>
  );
};

export default Portfolio;
