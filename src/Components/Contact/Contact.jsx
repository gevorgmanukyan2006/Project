import Styles from "./styles.module.css";
import NavbarComponent2 from "../Navbar/Navbar2";
import Image from "../../images/contact_image.jpg";
import AnimatedPage from "../AnimatedPage/AnimatedPage";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <AnimatedPage>
      <div className={Styles.contact}>
        <NavbarComponent2 />
        <div className={Styles.contact_div_1}></div>
        <img src={Image} alt="" className={Styles.contact_image} />
        <ContactForm />
      </div>
      <ContactInfo />
    </AnimatedPage>
  );
};

export default Contact;
