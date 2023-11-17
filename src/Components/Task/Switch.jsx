import Styles from "./styles.module.css";

const Switch = (props) => {
  return (
    <>
      <input
        className={Styles.react_switch_checkbox}
        id={`react-switch-new`}
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
      />
      <label
        className={Styles.react_switch_label}
        htmlFor={`react-switch-new`}
        style={{ background: props.checked && "#06D6A0" }}
      >
        <span className={Styles.react_switch_button} />
      </label>
    </>
  );
};

export default Switch;
