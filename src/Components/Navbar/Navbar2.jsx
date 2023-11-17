import Styles from "./styles.module.css";
import { Link } from "react-router-dom";
import Logo from "../../images/logo2.png";
import VariantsExample from "./Button";

const NavbarComponent2 = () => {
  return (
    <div className={Styles.navbar}>
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
      <Link className={Styles.login} to={"/login"}>
        <VariantsExample />
      </Link>
    </div>
  );
};

export default NavbarComponent2;
