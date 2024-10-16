import type { Meta, StoryObj } from '@storybook/react';

import { SignInPage } from './SignInPage';

const meta = {
  title: 'SignInPage',
  component: SignInPage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof SignInPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
