import Styles from "./styles.module.css";
import { Link } from "react-router-dom";
import AnimatedPage from "../AnimatedPage/AnimatedPage";

const Menu = (props) => {
  return (
    <AnimatedPage>
      <div className={props.isOpen ? Styles.menu_active : Styles.menu}>
        <div className={Styles.header}>
          <h1>Our Projects</h1>
        </div>
        <div className={Styles.project_1}>
          <div className={Styles.img_div}></div>
          <div className={Styles.text_div}>
            <Link to={"/home"} className={Styles.link}>
              <p>Interior Design Website</p>
            </Link>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Menu;
