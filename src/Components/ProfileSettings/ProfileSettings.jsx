import Styles from "./styles.module.css";
import LogoutButton from "../LogoutButton";

const ProfileSettings = () => {
  return (
    <div className={Styles.settings_div}>
      <LogoutButton />
    </div>
  );
};

export default ProfileSettings;
