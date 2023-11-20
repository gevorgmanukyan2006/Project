import Styles from "./styles.module.css";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import LoginButton from "../LoginButton";

const NavbarComponent = () => {
  return (
    <main className={Styles.navbar}>
      <img src={Logo} alt="" className={Styles.logo} />
      <Link className={Styles.link} to={"/home"}>
        Home
      </Link>
      <Link className={Styles.link} to={"/design"}>
        Design
      </Link>
      <Link className={Styles.link} to={"/contact"}>
        Contact
      </Link>
      <Link to={"/"} className={Styles.link}>
        Go to the main page
      </Link>
      <LoginButton />
    </main>
  );
};

export default NavbarComponent;
