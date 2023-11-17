import Styles from "./styles.module.css";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Switch from "./Switch";

const Task = (props) => {
  const {
    handleDeleteTask,
    task,
    handleOnChange,
    checkedTasks,
    handleEditTask,
    setTasks,
    tasks,
  } = props;
  return (
    <div className={Styles.task}>
      <input
        type="checkbox"
        onChange={() => handleOnChange(task._id)}
        checked={checkedTasks.has(task._id)}
        className={Styles.check_box}
      />
      <div className={Styles.text_div}>
        <p>Title: {task.title}</p>

        <p>Description: {task.description}</p>
        <p>Date: {task.created_at}</p>
      </div>
      <div className={Styles.iconsContainer}>
        <button
          onClick={() => handleDeleteTask(task._id)}
          disabled={checkedTasks.has(task._id)}
          className={Styles.delete}
        ></button>
        <button
          disabled={checkedTasks.has(task._id)}
          onClick={() => handleEditTask(task)}
          className={Styles.edit}
        ></button>
        <Form>
          <Form.Check
            checked={task.status === "done"}
            type="switch"
            id="custom-switch"
            label="Check your task"
            className={Styles.switch}
            onChange={async (e) => {
              console.log(e.target.checked);
              const response = await fetch(
                `http://localhost:3001/task/${task._id}`,
                {
                  method: "PUT",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify({
                    status: e.target.checked ? "done" : "active",
                  }),
                }
              );
              const data = await response.json();
              const newTasks = tasks.map((item) => {
                if (item._id === task._id) {
                  return { ...item, status: data.status };
                }
                return item;
              });
              setTasks(newTasks);
            }}
          />
        </Form>
      </div>
    </div>
  );
};

export default Task;
