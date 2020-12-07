import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContentCarousel from './ContentCarousel';

describe(`Content Carousel`, () => {
  test(`should render inners properly`, () => {
    <ContentCarousel>
      <img alt="test" />
      <img alt="test" />
      <img alt="test" />
      <img alt="test" />
      <img alt="test" />
    </ContentCarousel>;
    const imgs = screen.getAllByAltText('test');
    expect(imgs).toHaveLength(5);
  });
});
