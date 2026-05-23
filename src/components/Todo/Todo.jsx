import AddTaskForm from "../AddTaskForm/AddTaskForm";
import SearchTaskForm from "../SearchTaskForm/SearchTaskForm";
import TodoInfo from "../TodoInfo/TodoInfo";
import TodoList from "../TodoList/TodoLIst";
import Button from "../Button/Button";
import {TasksContext} from "../../context/TasksContext";
import {useContext} from "react";
import styles from "./Todo.module.css";
             
const Todo = () => {
  const {
    firstIncompleteTaskRef,
  } = useContext(TasksContext);

  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>To Do List</h1>
      <AddTaskForm styles={styles} />
      <SearchTaskForm styles={styles} />
      <TodoInfo styles={styles} />
      <Button
        onClick={() => {
          firstIncompleteTaskRef.current?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        Показать первую невыполненную задачу
      </Button>
      {/* TODO: понять, почему мемоизация текущая не помогла */}
      <TodoList styles={styles} />
    </div>
  );
}

export default Todo