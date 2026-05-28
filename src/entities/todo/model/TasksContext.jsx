import { useIncompleteTaskScroll } from "./useIncompleteTaskScroll";
import useTasks from "./useTasks";
import {createContext, useMemo} from "react";

export const TasksContext = createContext({});

export const TasksProvider = (props) => {
  const {
    children,
  } = props;

  const {
    addTask,
    newTaskTitle,
    setNewTaskTitle,
    newTaskInputRef,
    searchQuery,
    setSearchQuery,
    tasks,
    filteredTasks,
    deleteTask,
    deleteAllTasks,
    toggleTaskComplete,
    disappearingTaskId,
    appearingTaskId,
  } = useTasks();

  const {
    firstIncompleteTaskRef,
    firstIncompleteTaskId,
  } = useIncompleteTaskScroll(tasks);

  const value = useMemo(() => ({
    addTask,
    newTaskTitle,
    setNewTaskTitle,
    newTaskInputRef,
    searchQuery,
    setSearchQuery,
    tasks,
    filteredTasks,
    deleteTask,
    deleteAllTasks,
    toggleTaskComplete,
    disappearingTaskId,
    appearingTaskId,
    firstIncompleteTaskRef,
    firstIncompleteTaskId,
  }), [
    addTask,
    newTaskTitle,
    setNewTaskTitle,
    newTaskInputRef,
    searchQuery,
    setSearchQuery,
    tasks,
    filteredTasks,
    deleteTask,
    deleteAllTasks,
    toggleTaskComplete,
    disappearingTaskId,
    appearingTaskId,
    firstIncompleteTaskRef,
    firstIncompleteTaskId,
  ]);

  return (
    <TasksContext.Provider value={value}>
      {children}
    </TasksContext.Provider>
  );
}