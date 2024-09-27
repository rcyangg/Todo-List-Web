import {composeStories} from '@storybook/react';
import { render, screen } from '@test-utils';
import * as stories from './TemplateName.stories';

describe('<TemplateName />', () => {
  it('should mount', () => {
    const { Primary } = composeStories(stories);
    render(<Primary />);
    expect(screen.getByTestId('TemplateName')).toHaveAttribute(
        'data-value'
    );
  });
});
