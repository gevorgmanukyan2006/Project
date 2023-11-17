import NavbarComponent2 from "../Navbar/Navbar2";
import AnimatedPage from "../AnimatedPage/AnimatedPage";
import LogoImage from "../../images/Login.png";
import Styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <AnimatedPage>
      <div className={Styles.login_main}>
        <NavbarComponent2 />
        <div className={Styles.login_div}>
          <div className={Styles.login_div_1}>
            <img src={LogoImage} alt="" className={Styles.logo_image} />
            <Link to={"/register"}>
              <p className={Styles.paragraph}>Register</p>
            </Link>
          </div>
          <div className={Styles.login_div_2}>
            <div className={Styles.form}>
              <h1>Log In</h1>
              <input type="text" placeholder="Your Name" />
              <input type="password" placeholder="Password" />
              <div className={Styles.remember}>
                <input type="checkbox" />
                <p htmlFor="">Remember me</p>
              </div>
              <button className={Styles.login_button}>Log In</button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Login;
