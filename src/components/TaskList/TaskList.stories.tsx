import type { Meta, StoryObj } from '@storybook/react';

import { TaskList } from './TaskList';

const meta = {
  title: 'TaskList',
  component: TaskList,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof TaskList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    tasks: [{
      id: 1,
      name: 'task-1',
      completed: false,
      createDate: '2024-09-30T00:00:00'
    }],
  },
};
