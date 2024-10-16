import {composeStories} from '@storybook/react';
import { render, screen } from '@test-utils';
import * as stories from './AddTask.stories';

describe('<AddTask />', () => {
  it('should mount', () => {
    const { Primary } = composeStories(stories);
    render(<Primary />);
    expect(screen.getByTestId('AddTask')).toHaveAttribute(
        'data-value'
    );
  });
});
