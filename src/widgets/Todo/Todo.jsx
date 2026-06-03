import AddTaskForm from "@/features/add-task";
import SearchTaskForm from "@/features/search-task";
import TodoInfo from "@/features/stats";
import {TodoList} from "@/entities/todo";
import Button from "@/shared/ui/Button";
import {TasksContext} from "@/entities/todo";
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
        Первая невыполненная
      </Button>
      {/* TODO: понять, почему мемоизация текущая не помогла */}
      <TodoList styles={styles} />
    </div>
  );
}

export default Todo