import {composeStories} from '@storybook/react';
import { render, screen } from '@test-utils';
import * as stories from './SignUpPage.stories';

describe('<SignUpPage />', () => {
  it('should mount', () => {
    const { Primary } = composeStories(stories);
    render(<Primary />);
    expect(screen.getByTestId('SignUpPage')).toBeInTheDocument();
  });
});
