import {composeStories} from '@storybook/react';
import { render, screen } from '@test-utils';
import * as stories from './Protected.stories';

describe('<Protected />', () => {
  it('should mount', () => {
    const { Primary } = composeStories(stories);
    render(<Primary />);
    expect(screen.getByTestId('Protected')).toHaveAttribute(
        'data-value'
    );
  });
});
