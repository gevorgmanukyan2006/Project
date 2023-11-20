import Styles from "./styles.module.css";
import { Link } from "react-router-dom";
import AnimatedPage from "../AnimatedPage/AnimatedPage";
import Image from "../../images/Project1.png";
import Image2 from "../../images/Project2.png";

const Menu = (props) => {
  return (
    <AnimatedPage>
      <div className={props.isOpen ? Styles.menu_active : Styles.menu}>
        <div className={Styles.header}>
          <h1>Our Projects</h1>
        </div>
        <div className={Styles.projects_container}>
          <div className={Styles.project1_container}>
            <img src={Image} alt="" className={Styles.img_1} />
            <div className={Styles.text_div}>
              <Link to={"/home"} className={Styles.project_link}>
                Interior Design Website
              </Link>
            </div>
          </div>
          <div className={Styles.project2_container}>
            <img src={Image2} alt="" className={Styles.img_2} />
            <div className={Styles.text_div}>
              <Link to={"/todo"} className={Styles.project_link}>
                ToDo List
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Menu;
