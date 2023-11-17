import NavbarComponent2 from "../Navbar/Navbar2";
import AnimatedPage from "../AnimatedPage/AnimatedPage";
import Styles from "./styles.module.css";
import RegsiterImage from "../../images/register.png";

const Regsiter = () => {
  return (
    <AnimatedPage>
      <div className={Styles.register_main}>
        <NavbarComponent2 />
        <div className={Styles.register_div}>
          <div className={Styles.register_div_1}>
            <img src={RegsiterImage} alt="" className={Styles.register_image} />
          </div>
          <div className={Styles.register_div_2}>
            <div className={Styles.form}>
              <h1>CREATE ACCOUNT</h1>
              <div className={Styles.name_surname}>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Surname" />
              </div>
              <input
                type="password"
                name=""
                id=""
                placeholder="Password"
                className={Styles.password_email}
              />
              <input
                type="email"
                name=""
                id=""
                placeholder="Your Email"
                className={Styles.password_email}
              />
              <button className={Styles.register_button}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Regsiter;
