import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe(`Header Component`, () => {
  test(`should renders properly`, () => {
    render(<Header />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(5);
  });

  test(`shoul call functions on each button`, () => {
    const onClick = jest.fn();
    render(
      <Header
        onHome={onClick}
        onAbout={onClick}
        onActivity={onClick}
        onProjects={onClick}
        onContact={onClick}
      />,
    );
    const buttons = screen.getAllByRole('button');
    buttons.forEach((button) => {
      userEvent.click(button);
    });
    expect(buttons).toBeCalledTimes(5);
  });
});
