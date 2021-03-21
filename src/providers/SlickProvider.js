import React, { createContext, useContext } from 'react';
import { useVerticalCarousel } from './components/verticalCarousel/hooks';

export const VerticalCarouselContext = createContext(null);

export const useVerticalCarouselContext = () => {
  const slick = useContext(VerticalCarouselContext);
  return slick;
};

const SlickProvider = ({ children }) => {
  const slick = useVerticalCarousel();

  return (
    <VerticalCarouselContext.Provider value={slick}>
      {children}
    </VerticalCarouselContext.Provider>
  );
};

export default SlickProvider;
