import { render } from '@testing-library/svelte';
import Grid from 'components/Grid/Grid.svelte';

describe('Grid component', () => {
  test('should render component correctly', () => {
    const { container } = render(Grid);

    expect(container.getElementsByClassName('grid-container').length).toEqual(
      1,
    );
  });
});
