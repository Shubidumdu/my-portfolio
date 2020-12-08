import React, { createContext, useContext } from 'react';
import { useVerticalSlick } from './components/verticalCarousel/hooks';

export const SlickContext = createContext(null);

export const useVerticalSlickContext = () => {
  const slick = useContext(SlickContext);
  return slick;
};

const SlickProvider = ({ children }) => {
  const slick = useVerticalSlick();

  return (
    <SlickContext.Provider value={slick}>{children}</SlickContext.Provider>
  );
};

export default SlickProvider;
