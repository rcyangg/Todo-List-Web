import { useImmerReducer } from 'use-immer';
import {
  initialTaskPageState,
  TaskPageContext,
  TaskPageDispatchContext,
  taskPageReducer,
} from '@/pages/TaskPage/TaskPageContext';

export const TaskPageProvider = ({ children }: any) => {
  const [taskPageStates, dispatch] = useImmerReducer(taskPageReducer, initialTaskPageState);

  return (
    <TaskPageContext.Provider value={taskPageStates}>
      <TaskPageDispatchContext.Provider value={dispatch}>
        {children}
      </TaskPageDispatchContext.Provider>
    </TaskPageContext.Provider>
  );
};
