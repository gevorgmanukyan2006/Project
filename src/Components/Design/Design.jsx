import AnimatedPage from "../AnimatedPage/AnimatedPage";
import NavbarComponent2 from "../Navbar/Navbar2";
import Styles from "./styles.module.css";
import Apt from "./Apt";
import Tabs, { Tab } from "react-best-tabs";
import "react-best-tabs/dist/index.css";
import House from "./House";

const Design = () => {
  return (
    <AnimatedPage>
      <div className={Styles.design}>
        <NavbarComponent2 />
        <h1 className={Styles.design_header}>Design</h1>
        <div className={Styles.tabs}>
          <Tabs className={Styles.tabs_1}>
            <Tab title="Apartments" className="mr-3">
              <Apt />
            </Tab>
            <Tab title="Houses" className="mr-3">
              <House />
            </Tab>
            <Tab title="Commerical States" className="mr-3">
              <div className="mt-3"></div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Design;
