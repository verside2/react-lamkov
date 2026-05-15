import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const {
    tasks = [],
    filteredTasks,
    onDeleteTaskButtonClick,
    onTaskCompleteChange,
  } = props;

  const hasTasks = tasks.length > 0;
  const isEmptyFilteredTasks = filteredTasks?.length === 0;

  if (!hasTasks) {
    return (
      <div className="todo__empty-message">Задач пока нет</div>
    )
  }

  if (hasTasks && isEmptyFilteredTasks) {
    return (
      <div className="todo__empty-message">Задач не найдено</div>
    )
  }

  return (
    <ul className="todo__list">
      {(filteredTasks ?? tasks).map((task) => (
        <TodoItem
          className="todo__item"
          key={task.id}
          onDeleteTaskButtonClick={onDeleteTaskButtonClick}
          onTaskCompleteChange={onTaskCompleteChange}
          {...task}
        />
      ))}
    </ul>
  )
}

export default TodoList;