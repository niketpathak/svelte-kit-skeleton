import { render } from '@testing-library/svelte';
import Loader from 'components/Loader/Loader.svelte';

describe('Loader component', () => {
  test('should render component correctly', () => {
    const { container } = render(Loader);

    expect(container.getElementsByClassName('loader').length).toEqual(1);
  });
});
