import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Content from './Content';

describe(`Content Component`, () => {
  test(`should renders properly`, () => {
    render(<Content />);
  });
});
