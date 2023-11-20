import Styles from "./styles.module.css";
import { useState } from "react";
import OpenAlert from "../SweetAlert/SweetAlert";

const ContactForm = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
  });

  const OnChange = (e) => {
    if (e.target.type === "text") {
      value.name = e.target.value;
    } else if (e.target.type === "email") {
      value.email = e.target.value;
    } else {
      value.message = e.target.value;
    }
    setValue(value);
  };

  return (
    <div className={Styles.contact_form}>
      <h1>Contact Us</h1>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={OnChange}
        required
        id="name_input"
      />
      <input
        type="email"
        placeholder="Enter your email"
        onChange={OnChange}
        required
        id="email_input"
      />
      <textarea
        name=""
        cols="30"
        rows="10"
        placeholder="Enter your message"
        onChange={OnChange}
        id="message_input"
      ></textarea>
      <button onClick={() => OpenAlert(value)}>Submit</button>
    </div>
  );
};

export default ContactForm;
