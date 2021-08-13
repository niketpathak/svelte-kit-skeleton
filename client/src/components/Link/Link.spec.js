// @ts-nocheck
import { render } from '@testing-library/svelte';
import Link from 'components/Link/Link.svelte';

describe('Link component', () => {
  it('should render an anchor tag', () => {
    const url = 'http://test.com';
    const { container } = render(Link, { href: url });

    const aElement = container.querySelector('a');

    expect(aElement).toBeTruthy();
    expect(aElement.hasAttribute('href')).toBeTruthy();
    expect(aElement.getAttribute('href')).toBe(url);
    expect(aElement.getAttribute('target')).toEqual('_blank');
    expect(aElement.getAttribute('rel')).toEqual('noopener noreferrer nofollow');
  });

  it('should not render an a tag', () => {
    const { container } = render(Link);

    expect(container.querySelector('a')).toBeFalsy();
  });

  it('should not render an a tag with empty string', () => {
    const { container } = render(Link, {
      href: ' '
    });

    expect(container.querySelector('a')).toBeFalsy();
  });

  it('should render a path correctly in ssr', () => {

    Object.defineProperty(process, 'browser', {
      value: false,
      writable: true,
    });

    const url = 'fip/podcast';
    const { container } = render(Link, {
      href: url
    });

    const aElement = container.querySelector('a');

    expect(aElement.getAttribute('href')).toEqual(`/${url}`);
  });

  test.each([
    ['mailto:test@example.com'],
    ['tel:0123456789'],
    ['javascript:void(0)'],
    ['http://www.example.fr']
  ])('it should return original url for %s',(url) => {
    Object.defineProperty(process, 'browser', {
      value: true,
      writable: true,
    });

    Object.defineProperty(window, 'location', {
      writable: true,
      value: {
        origin: 'http://www.example.fr',
      },
    });

    const { container } = render(Link, { href: url });
    const aElement = container.querySelector('a');
    expect(aElement.hasAttribute('target')).toBeFalsy();
    expect(aElement.hasAttribute('rel')).toBeFalsy();
    expect(aElement.getAttribute('href')).toEqual(url);
  });
});
