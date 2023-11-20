import { useAuth0 } from "@auth0/auth0-react";
import Styles from "./styles.module.css";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button onClick={() => logout()} className={Styles.logout}>
        Log Out
      </button>
    )
  );
};

export default LogoutButton;
