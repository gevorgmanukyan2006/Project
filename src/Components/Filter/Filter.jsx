import { useState } from "react";
import { Form } from "react-bootstrap";
import Styles from "./styles.module.css";

const Filter = ({ tasks, setTasks }) => {
  const [searchData, setSearchData] = useState();
  const filterByTitle = () => {
    console.log(searchData, "searchData");
    const filteredTasks = tasks.filter((task) => task.title === searchData);
    console.log(filteredTasks, "filteredTasks");
    setTasks(filteredTasks);
  };
  return (
    <div className={Styles.search_and_button}>
      <div className={Styles.search_image} onClick={filterByTitle}></div>
      <Form.Control
        placeholder="search ..."
        onChange={(e) => setSearchData(e.target.value)}
        className={Styles.search}
      />
    </div>
  );
};

export default Filter;
