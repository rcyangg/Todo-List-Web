import type { Meta, StoryObj } from '@storybook/react';

import { TaskListComponent } from './TaskListComponent';

const meta = {
  title: 'TaskListComponent',
  component: TaskListComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof TaskListComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    foo: 'dummy_value',
  },
};
