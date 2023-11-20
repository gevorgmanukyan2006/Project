import Styles from "./styles.module.css";
import { Link } from "react-router-dom";
import Logo from "../../images/logo2.png";
import LoginButton from "../LoginButton";

const NavbarComponent2 = (props) => {
  return (
    <main className={Styles.navbar}>
      <img src={Logo} alt="" className={Styles.logo} />
      <Link className={Styles.link2} to={"/home"}>
        Home
      </Link>
      <Link className={Styles.link2} to={"/design"}>
        Design
      </Link>
      <Link className={Styles.link2} to={"/contact"}>
        Contact
      </Link>
      <Link to={"/"} className={Styles.link2}>
        {props.isAuthenticated ? "Go to the account" : "Go to the main page"}
      </Link>
      <LoginButton />
    </main>
  );
};

export default NavbarComponent2;
