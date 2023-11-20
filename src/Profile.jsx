import Styles from "./styles.module.css";
import UserIcon from "./images/user.png";
import Logo from "./images/logo.png";
import ProfileSettings from "./Components/ProfileSettings/ProfileSettings";
import { useState } from "react";
import Apt from "./Components/Design/Apt";
import House from "./Components/Design/House";
import Tabs, { Tab } from "react-best-tabs";
import { Link } from "react-router-dom";
import AnimatedPage from "./Components/AnimatedPage/AnimatedPage";

const Profile = (props) => {
  const [isOpenUserSettings, setIsOpenUserSettings] = useState(false);

  const CloseUserSettings = () => {
    if (isOpenUserSettings) {
      setIsOpenUserSettings(false);
    }
  };

  return (
    props.isAuthenticated && (
      <AnimatedPage>
        <div className={Styles.main} onClick={CloseUserSettings}>
          <div className={Styles.navbar}>
            <img src={Logo} className={Styles.logo} alt="Here is a /" />
            <Link className={Styles.contact} to={"/contact"}>
              Contact
            </Link>
            <div
              className={Styles.user_info}
              onClick={() => setIsOpenUserSettings(!isOpenUserSettings)}
            >
              <img src={UserIcon} alt="Here is a /" />
              <p className={Styles.user_email}>{props.user.email} </p>
            </div>
            {isOpenUserSettings && <ProfileSettings />}
          </div>
          <div className={Styles.tabs}>
            <Tabs className={Styles.tabs_1}>
              <Tab title="Apartments" className="mr-3">
                <Apt />
              </Tab>
              <Tab title="Houses" className="mr-3">
                <House />
              </Tab>
            </Tabs>
          </div>
        </div>
      </AnimatedPage>
    )
  );
};

export default Profile;
