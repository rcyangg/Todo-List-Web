import {composeStories} from '@storybook/react';
import { render, screen } from '@test-utils';
import * as stories from './DeleteTask.stories';

describe('<DeleteTask />', () => {
  it('should mount', () => {
    const { Primary } = composeStories(stories);
    render(<Primary />);
    expect(screen.getByTestId('DeleteTask')).toHaveAttribute(
        'data-value'
    );
  });
});
