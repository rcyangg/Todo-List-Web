import {composeStories} from '@storybook/react';
import { render, screen } from '@test-utils';
import * as stories from './TaskPage.stories';

describe('<TaskPage />', () => {
  it('should mount', () => {
    const { Primary } = composeStories(stories);
    render(<Primary />);
    expect(screen.getByTestId('task-page')).toBeInTheDocument();
  });
});
