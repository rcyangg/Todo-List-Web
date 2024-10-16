import { Dispatch } from 'react';
import { CloseButton } from '@mantine/core';
import {
  TaskPageAction,
  TaskPageActionType,
  useTaskPageDispatch,
} from '@/pages/TaskPage/TaskPageContext';
import { deleteTask } from '@/services/jojoservice/jojo';
import { Task } from '@/services/jojoservice/jojo.types';

interface DeleteTaskProps {
  task: Task;
}

export const DeleteTask = ({ task }: DeleteTaskProps) => {
  const dispatch = useTaskPageDispatch();

  const handleClick = async (localDispatch: Dispatch<TaskPageAction>, task: Task) => {
    await deleteTask(task);
    localDispatch({ type: TaskPageActionType.DELETE_TASK, payload: task });
  };

  return <CloseButton onClick={(e) => {handleClick(dispatch, task)}} />;
};
