import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CarouselButtons from './CarouselButtons';

describe(`Buttons component`, () => {
  test(`should render properly`, () => {
    render(<CarouselButtons />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });

  test(`should call a function on click each button`, () => {
    const onPrev = jest.fn();
    const onNext = jest.fn();
    render(<CarouselButtons onPrev={onPrev} onNext={onNext} />);
    const buttons = screen.getAllByRole('button');
    buttons.forEach((button) => {
      userEvent.click(button);
    });
    expect(onPrev).toBeCalledTimes(1);
    expect(onNext).toBeCalledTimes(1);
  });
});
