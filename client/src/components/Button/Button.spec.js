// @ts-nocheck
import { render, fireEvent } from '@testing-library/svelte';
import ButtonDemo from 'components/Button/ButtonDemo.svelte';
import Button from 'components/Button/Button.svelte';
import { axe } from '../../../jest.axe';

describe('Button component', () => {
  it('should render a button correctly', () => {
    const { getByRole } = render(ButtonDemo);
    expect(getByRole('button')).toBeInTheDocument();
  });

  it('should render a button accessible to disabled users', async () => {
    const { container } = render(ButtonDemo, {
      buttonText: 'Register',
    });

    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render a disabled button', () => {
    const { getByRole } = render(ButtonDemo, {
      disabled: true,
      buttonText: 'button',
    });

    expect(getByRole('button')).toHaveAttribute('disabled');
  });

  it('Should call the onclick handler', async () => {
    const mockFn = jest.fn();

    const { getByRole } = render(ButtonDemo, {
      buttonAction: mockFn,
    });

    await fireEvent.click(getByRole('button'));
    expect(mockFn).toHaveBeenCalled();
  });

  it('Should render a button with an icon', () => {
    const { container } = render(ButtonDemo);

    expect(container.querySelector('[slot="icon"]')).toBeInTheDocument();
  });

  it('Should render a round button', () => {
    const { getByRole } = render(ButtonDemo, {
      round: true,
    });

    expect(getByRole('button')).toHaveClass('round');
  });

  it('should render a button with default values', async () => {
    const { getByRole } = render(Button);
    const button = getByRole('button');

    expect(button).toHaveClass('btn-primary');
    expect(button).toHaveClass('btn-m');
    expect(button).toHaveClass('btn-black');
  });
});
