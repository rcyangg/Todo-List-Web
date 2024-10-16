import type { Meta, StoryObj } from '@storybook/react';

import { TaskDashboard } from './TaskDashboard';

const meta = {
  title: 'TaskDashboard',
  component: TaskDashboard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof TaskDashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    foo: 'dummy_value',
  },
};
