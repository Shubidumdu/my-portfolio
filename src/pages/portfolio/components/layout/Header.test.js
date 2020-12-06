import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header';

describe(`Header Component`, () => {
  test(`should renders properly`, () => {
    render(<Header />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(5);
  });
});
