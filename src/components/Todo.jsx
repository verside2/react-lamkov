import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoLIst";
import Button from "./Button";
import {TasksContext} from "../context/TasksContext";
import {useContext} from "react";

const Todo = () => {
  const {
    firstIncompleteTaskRef,
  } = useContext(TasksContext);

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo />
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
      <TodoList />
    </div>
  );
}

export default Todo