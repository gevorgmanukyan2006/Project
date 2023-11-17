import Styles from "./styles.module.css";
import EmailIcon from "../../images/email.png";
import GitHubIcon from "../../images/github.png";
import DiscordIcon from "../../images/discord.png";
import { useState } from "react";

const ContactInfo = () => {
  return (
    <div className={Styles.contact_info}>
      <div>
        <img src={EmailIcon} alt="" />
        <h3>Email</h3>
        <p className={Styles.email1}>gevorg-manukyan8@mail.ru,</p>
        <p style={{ marginTop: "5%" }}>anyutharutyunyan@bk.ru</p>
      </div>
      <div>
        <img src={GitHubIcon} alt="" />
        <h3>GitHub</h3>
        <p>gevorgmanukyan2006</p>
        <p style={{ marginTop: "5%" }}>Anahit858</p>
      </div>
      <div>
        <img src={DiscordIcon} alt="" />
        <h3>Discord</h3>
        <p>Gev Manukyan</p>
        <p style={{ marginTop: "5%" }}>Anahit Harutyunyan</p>
      </div>
    </div>
  );
};

export default ContactInfo;
