import { Dispatch, useState } from 'react';
import { Text, TextInput } from '@mantine/core';
import {
  TaskPageAction,
  TaskPageActionType,
  useTaskPageDispatch,
} from '@/pages/TaskPage/TaskPageContext';
import { addTask as serviceAddTask } from '@/services/jojoservice/jojo';
import { Task } from '@/services/jojoservice/jojo.types';

interface AddTaskProps {}

export const AddTask = () => {
  const dispatch = useTaskPageDispatch();
  const [content, setContent] = useState('');
  // todo implementing loading

  const addTask = async (task: Task) => {
    try {
      const newTask: Task = await serviceAddTask(task);
      dispatch({ type: TaskPageActionType.ADD_TASK, payload: newTask });
    } catch (error) {
      // todo: integrate notification and remove below error console log .
      console.error('failed to add task', error)
    }
  };

  const handleSave = async (
    task: Task
  ) => {
      await addTask(task);
      // clean the content for next task input
      setContent('');
  };

  return (
    <>
      <Text size="md" fw={700} mt="xs">
        Add A Task
      </Text>
      <TextInput
        placeholder="what do you want to do..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={async (e) => {
          if (e.key === 'Enter') {
            const newTask: Task = { name: content };
            await handleSave(newTask);
          }
        }}
        mt="md"
      />
    </>
  );
};
