import type { Meta, StoryObj } from '@storybook/react';

import { TaskPage } from './TaskPage';

const meta = {
  title: 'TaskPage',
  component: TaskPage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof TaskPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
