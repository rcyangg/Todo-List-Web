import { Dispatch, useState } from 'react';
import { Checkbox, TextInput } from '@mantine/core';
import {
  initialTaskPageState,
  TaskPageAction,
  TaskPageActionType, taskPageReducer,
  useTaskPageDispatch,
} from '@/pages/TaskPage/TaskPageContext';
import { updateTask } from '@/services/jojoservice/jojo';
import { Task } from '@/services/jojoservice/jojo.types';
import DeleteTask from "@/components/TaskList/DeleteTask";
import {useImmerReducer} from "use-immer";

interface TaskListComponentProps {
  task: Task;
}

export const TaskListComponent = ({ task }: TaskListComponentProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTaskPageDispatch();

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleSave = (e: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent) => {
    if ('key' in e && e.key !== 'Enter') {
      return;
    }
    setIsEditing(false);
  };

  const changeStatus = async (localDispatch: Dispatch<TaskPageAction>, task: Task) => {
    await updateTask(task);
    localDispatch({
      type: TaskPageActionType.CHANGE_COMPLETE_STATUS,
      payload: task,
    });
  };

  const changeContent = async (localDispatch: Dispatch<TaskPageAction>, task: Task) => {
    await updateTask(task);
    localDispatch({
      type: TaskPageActionType.CHANGE_TASK_CONTENT,
      payload: task,
    });
  };

  return (
    <div data-testid="TaskListComponent">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginTop: '12px',
        }}
      >
        <DeleteTask task={task}/>
        <Checkbox
          key={task.id}
          checked={task.completed}
          onChange={(event) => {
            // call backend api first, then dispatch complete task action to update state
            const newTask: Task = { ...task, completed: event.target.checked };
            changeStatus(dispatch, newTask);
          }}
        />
        {isEditing ? (
          <TextInput
            value={task.name}
            onChange={(e) => {
              const newTask: Task = { ...task, name: e.target.value };
              changeContent(dispatch, newTask);
            }}
            onBlur={handleSave}
            onKeyDown={handleSave}
            autoFocus
          />
        ) : (
          <div
            onDoubleClick={handleDoubleClick}
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
          >
            {task.name}
          </div>
        )}
      </div>
    </div>
  );
};
