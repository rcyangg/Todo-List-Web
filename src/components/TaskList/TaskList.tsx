import _ from 'lodash';
import { Stack } from '@mantine/core';
import TaskListComponent from '@/components/TaskList/TaskListComponent';
import { Task } from '@/services/jojoservice/jojo.types';

interface TaskListProps {
  tasks: Task[];
}

export const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <div data-testid="TaskList">
      <Stack h={50} bg="var(--mantine-color-body)" align="stretch"  gap="xs" mt="lg">
        {_.map(tasks, (task) => {
          return <TaskListComponent task={task} />;
        })}
      </Stack>
    </div>
  );
};
