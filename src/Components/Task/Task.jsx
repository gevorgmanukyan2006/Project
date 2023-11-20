import Styles from "./styles.module.css";
import Form from "react-bootstrap/Form";

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

  const taskClass = task.status === "done" ? Styles.taskDone : Styles.task;
  const paragraphClass =
    task.status === "done" ? Styles.done_paragraph : Styles.paragraph;

  return (
    <div className={taskClass}>
      <div className={Styles.title_div}>
        <input
          type="checkbox"
          onChange={() => handleOnChange(task._id)}
          checked={checkedTasks.has(task._id)}
          className={Styles.check_box}
        />
        <p className={paragraphClass}>{task.title}</p>
      </div>
      <div className={Styles.description_date}>
        <p>Description: {task.description}</p>
        <p>Date: {task.created_at.split("T", 1)[0]}</p>
      </div>

      <div className={Styles.iconsContainer}>
        <button
          onClick={() => handleDeleteTask(task._id)}
          disabled={checkedTasks.has(task._id)}
          className={Styles.delete}
        ></button>
        {task.status === "active" && (
          <button
            disabled={checkedTasks.has(task._id)}
            onClick={() => handleEditTask(task)}
            className={Styles.edit}
          ></button>
        )}

        <Form>
          <Form.Check
            checked={task.status === "done"}
            type="switch"
            id="custom-switch"
            label={task.status === "done" ? "Uncheck task" : "Check task"}
            className={Styles.switch}
            onChange={async (e) => {
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
