import Styles from "./styles.module.css";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import VariantsExample from "./Button";

const NavbarComponent = () => {
  return (
    <div className={Styles.navbar}>
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
      <Link className={Styles.login} to={"/login"}>
        <VariantsExample />
      </Link>
    </div>
  );
};

export default NavbarComponent;
