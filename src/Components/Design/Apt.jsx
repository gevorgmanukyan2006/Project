import Styles from "./styles.module.css";
import Image3 from "../../images/Image3.jpg";
import Image4 from "../../images/Image4.jpg";
import Image5 from "../../images/Image5.jpg";
import Image6 from "../../images/Image6.jpg";
import Image7 from "../../images/Image7.jpg";
import Image8 from "../../images/Image8.jpg";
import Image9 from "../../images/Image9.jpg";

const Apt = () => {
  return (
    <div className={Styles.apt}>
      <div className={Styles.first_div}>
        <img src={Image5} alt="" className={Styles.img5} />
        <div className={Styles.two_images}>
          <img src={Image3} alt="" className={Styles.two_images_img} />
          <img src={Image6} alt="" className={Styles.two_images_img} />
        </div>
      </div>
      <div className={Styles.second_div}>
        <div className={Styles.second_div_two_images}>
          <img
            src={Image4}
            alt=""
            className={Styles.second_div_two_images_img}
          />
          <img
            src={Image9}
            alt=""
            className={Styles.second_div_two_images_img}
          />
          <img src={Image7} alt="" className={Styles.img7} />
        </div>
      </div>
      <div className={Styles.img8_div}>
        <img src={Image8} alt="" className={Styles.img8} />
      </div>
    </div>
  );
};

export default Apt;
