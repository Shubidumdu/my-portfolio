import React, { createContext, useContext } from 'react';
import useVerticalCarousel from '../hooks/useVerticalCarousel';

export const VerticalCarouselContext = createContext(null);

export const useVerticalCarouselContext = () => {
  const slick = useContext(VerticalCarouselContext);
  return slick;
};

const SlickProvider = ({ children }) => {
  const slick = useVerticalCarousel();
  console.log(slick);

  return (
    <VerticalCarouselContext.Provider value={slick}>
      {children}
    </VerticalCarouselContext.Provider>
  );
};

export default SlickProvider;
