import {useRef} from "react";

export const useIncompleteTaskScroll = (tasks) => {
  const firstIncompleteTaskRef = useRef(null);
  const firstIncompleteTaskId = tasks.find(({isDone}) => !isDone)?.id;

  return {
    firstIncompleteTaskId,
    firstIncompleteTaskRef,
  }
};