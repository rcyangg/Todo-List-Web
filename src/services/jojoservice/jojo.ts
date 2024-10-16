import { Task } from '@/services/jojoservice/jojo.types';
import {
  addTask as proxyAddTask,
  deleteTask as proxyDeleteTask,
  listTasks as proxyListTasks,
  updateTask as proxyUpdateTasks,
} from '@/services/jojoservice/jojoproxy';

// TODO: implement pagination
export const listTasks = (): Promise<Task[]> => {
  return proxyListTasks();
};

export const updateTask = (task: Task) => {
  return proxyUpdateTasks(task);
};

export const addTask = (task: Task) => {
  return proxyAddTask(task);
};

export const deleteTask = (task: Task) => {
  return proxyDeleteTask(task);
};
