import {createContext, useState, useRef, useCallback, useEffect, useMemo} from "react";

export const TasksContext = createContext({});

export const TasksProvider = (props) => {
  const {
    children,
  } = props;

  const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem("tasks");

  if (savedTasks) {
     return JSON.parse(savedTasks);
  }

  return [
      {id: "task-1", title: "Купить молоко", isDone: false},
      {id: "task-2", title: "Погладить кота", isDone: true},
    ];
  });

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const newTaskInputRef = useRef(null);
  const firstIncompleteTaskRef = useRef(null);
  const firstIncompleteTaskId = tasks.find(({isDone}) => !isDone)?.id;  

  const deleteAllTasks = useCallback(() => {
    const isConfirmed = confirm("Удалить все задачи?");

    if (isConfirmed) {
      setTasks([]);
    }
  }, []);

  const deleteTask = useCallback((taskId) => {
    setTasks(
      tasks.filter((task) => task.id !== taskId)
    );
  }, [tasks]);

  const toggleTaskComplete = useCallback((taskId, isDone) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return {...task, isDone};
        }

        return task;
      })
    );
  }, [tasks]);

  const addTask = useCallback(() => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDone: false,
      }

      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTaskTitle("");
      setSearchQuery("");

      newTaskInputRef.current.focus();
    }
  }, [newTaskTitle]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    newTaskInputRef.current.focus();
  }, []);

  const filteredTasks = useMemo(() => {
    const clearSearchQuery = searchQuery.trim().toLowerCase();
    
    return clearSearchQuery.length
      ? tasks.filter(({title}) => title.toLowerCase().includes(clearSearchQuery))
      : null; /* может null не считается за примитив и поэтому мемоизация не работает? */
  }, [searchQuery, tasks]);

  return (
    <TasksContext.Provider
      value={{
        addTask,
        newTaskTitle,
        setNewTaskTitle,
        newTaskInputRef,
        searchQuery,
        setSearchQuery,
        tasks,
        filteredTasks,
        firstIncompleteTaskRef,
        firstIncompleteTaskId,
        deleteTask,
        deleteAllTasks,
        toggleTaskComplete,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}