import { createContext, Dispatch, useContext } from 'react';
import _ from 'lodash';
import { TaskPageState } from '@/pages/TaskPage/TaskPage.types';
import { Task } from '@/services/jojoservice/jojo.types';

export const TaskPageContext = createContext<TaskPageState>(null as unknown as TaskPageState);
export const TaskPageDispatchContext = createContext<Dispatch<TaskPageAction>>(() => {});

export enum TaskPageActionType {
  SET_TASK_PAGE_STATE = 'SET_TASK_PAGE_STATE',
  ADD_TASK = 'ADD_TASK',
  CHANGE_COMPLETE_STATUS = 'HANDLE_COMPLETE_STATUS',
  CHANGE_TASK_CONTENT = 'CHANGE_TASK_CONTENT',
  DELETE_TASK = 'DELETE_TASK',
}

export type TaskPageAction =
  | {
      type: TaskPageActionType.SET_TASK_PAGE_STATE;
      payload: TaskPageState;
    }
  | {
      type: TaskPageActionType.ADD_TASK;
      payload: Task;
    }
  | {
      type: TaskPageActionType.CHANGE_COMPLETE_STATUS;
      payload: Task;
    }
  | {
      type: TaskPageActionType.CHANGE_TASK_CONTENT;
      payload: Task;
    }
  | {
      type: TaskPageActionType.DELETE_TASK;
      payload: Task;
    };

export const taskPageReducer = (draft: TaskPageState, action: TaskPageAction): TaskPageState => {
  switch (action.type) {
    case TaskPageActionType.SET_TASK_PAGE_STATE:
      return action.payload;
    case TaskPageActionType.ADD_TASK:
      draft.tasks.push(action.payload);
      break;
    case TaskPageActionType.CHANGE_COMPLETE_STATUS: {
      const index = _.findIndex(draft.tasks, (t: Task) => {
        return t.id === action.payload.id;
      });
      draft.tasks[index].completed = action.payload.completed;
      break;
    }
    case TaskPageActionType.CHANGE_TASK_CONTENT: {
      const index = _.findIndex(draft.tasks, (t: Task) => {
        return t.id === action.payload.id;
      });
      draft.tasks[index].name = action.payload.name;
      break;
    }
    case TaskPageActionType.DELETE_TASK: {
      const index = _.findIndex(draft.tasks, (t: Task) => {
        return t.id === action.payload.id;
      });
      draft.tasks.splice(index, 1);
      break;
    }
  }
  return draft;
};

export const initialTaskPageState: TaskPageState = {
  tasks: [],
};

export const useTaskPageState = (): TaskPageState => {
  return useContext(TaskPageContext);
};

export const useTaskPageDispatch = (): Dispatch<TaskPageAction> => {
  return useContext(TaskPageDispatchContext);
};
