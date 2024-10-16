import {composeStories} from '@storybook/react';
import { render, screen } from '@test-utils';
import * as stories from './TaskList.stories';

describe('<TaskList />', () => {
  it('should mount', () => {
    const { Primary } = composeStories(stories);
    render(<Primary />);
    expect(screen.getByTestId('TaskList')).toBeInTheDocument();
  });
});
