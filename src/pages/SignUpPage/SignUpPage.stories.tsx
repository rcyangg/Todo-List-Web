import type { Meta, StoryObj } from '@storybook/react';

import { SignUpPage } from './SignUpPage';

const meta = {
  title: 'SignUpPage',
  component: SignUpPage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof SignUpPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
