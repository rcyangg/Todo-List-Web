import {composeStories} from '@storybook/react';
import { render, screen } from '@test-utils';
import * as stories from './TaskListComponent.stories';

describe('<TaskListComponent />', () => {
  it('should mount', () => {
    const { Primary } = composeStories(stories);
    render(<Primary />);
    expect(screen.getByTestId('TaskListComponent')).toHaveAttribute(
        'data-value'
    );
  });
});
