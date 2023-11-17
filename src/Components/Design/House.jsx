import Styles from "./styles.module.css";
import Image1 from "../../images/house_1.jpg";
import Image2 from "../../images/house_2.jpg";
import Image3 from "../../images/house_3.jpg";

const House = () => {
  return (
    <div className={Styles.house_main}>
      <div className={Styles.house__div}>
        <div className={Styles.text_div}>
          <h1 className={Styles.header}>Interior 1</h1>
        </div>
        <div className={Styles.image_div}>
          <img src={Image1} alt="" />
        </div>
      </div>
      <div className={Styles.house__div}>
        <div className={Styles.image_div}>
          <img src={Image2} alt="" />
        </div>
        <div className={Styles.text_div}>
          <h1>Interior 2</h1>
        </div>
      </div>
      <div className={Styles.house__div}>
        <div className={Styles.text_div}>
          <h1>Interior 3</h1>
        </div>
        <div className={Styles.image_div}>
          <img src={Image3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default House;
