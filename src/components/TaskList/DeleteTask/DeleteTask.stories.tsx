import type { Meta, StoryObj } from '@storybook/react';

import { DeleteTask } from './DeleteTask';

const meta = {
  title: 'DeleteTask',
  component: DeleteTask,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof DeleteTask>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    foo: 'dummy_value',
  },
};
