import type { Meta, StoryObj } from '@storybook/react';

import { Protected } from './Protected';

const meta = {
  title: 'Protected',
  component: Protected,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Protected>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    foo: 'dummy_value',
  },
};
