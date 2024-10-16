import { Dispatch, useCallback, useEffect, useMemo, useState } from 'react';
import _ from 'lodash';
import {LoadingOverlay} from '@mantine/core';
import TaskList from '@/components/TaskList';
import {
  TaskPageAction,
  TaskPageActionType,
  useTaskPageDispatch,
  useTaskPageState,
} from '@/pages/TaskPage/TaskPageContext';
import { listTasks } from '@/services/jojoservice/jojo';
import AddTask from "@/components/AddTask";

export const TaskDashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  // get initial task state from backend
  const state = useTaskPageState();
  const dispatch = useTaskPageDispatch();

  const dataProvider = useCallback(async (localDispatch: Dispatch<TaskPageAction>) => {
    setIsLoading(true);
    try {
      const initialTasks = await listTasks();
      localDispatch({
        type: TaskPageActionType.SET_TASK_PAGE_STATE,
        payload: {
          tasks: initialTasks,
        },
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  const debouncedDataProvider = useMemo(
    // lodash https://lodash.com/docs
    () => _.debounce(dataProvider, 500),
    [dataProvider]
  );

  // Ensure only load once when we render the page.
  useEffect(() => {
    debouncedDataProvider(dispatch);
    return () => {
      debouncedDataProvider.cancel();
    };
  }, [debouncedDataProvider, dispatch]);

  return (
    <div>
      <LoadingOverlay
        visible={isLoading}
        zIndex={1000}
        overlayProps={{ radius: 'sm', blur: 2 }}
        loaderProps={{ color: 'pink', type: 'bars' }}
      />
      <AddTask/>
      <TaskList tasks={state.tasks} />
    </div>
  );
};
