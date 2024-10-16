import {composeStories} from '@storybook/react';
import { render, screen } from '@test-utils';
import * as stories from './SignInPage.stories';

describe('<SignInPage />', () => {
  it('should mount', () => {
    const { Primary } = composeStories(stories);
    render(<Primary />);
    expect(screen.getByTestId('SignInPage')).toBeInTheDocument();
  });
});
