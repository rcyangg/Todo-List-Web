import type { Meta, StoryObj } from '@storybook/react';

import { TemplateName } from './TemplateName';

const meta = {
  title: 'TemplateName',
  component: TemplateName,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof TemplateName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
