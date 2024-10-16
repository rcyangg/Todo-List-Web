import type { Meta, StoryObj } from '@storybook/react';

import { AddTask } from './AddTask';

const meta = {
  title: 'AddTask',
  component: AddTask,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof AddTask>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    foo: 'dummy_value',
  },
};
