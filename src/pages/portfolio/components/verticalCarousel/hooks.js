import { useRef, useEffect, useState, useCallback } from 'react';

export const useVerticalSlick = () => {
  const slick = useRef(null);
  const [idx, setIdx] = useState(0);
  const [isStuck, setStuck] = useState(false);

  const scrollCallback = useCallback(
    (e) => {
      e.preventDefault();
      e.deltaY > 0 ? slick.current.slickNext() : slick.current.slickPrev();
    },
    [slick.current],
  );

  useEffect(() => {
    if (!isStuck)
      window.addEventListener('wheel', scrollCallback, { passive: false });

    return () => {
      window.removeEventListener('wheel', scrollCallback);
    };
  }, [isStuck]);

  return { ref: slick, index: idx, setIndex: setIdx, isStuck, setStuck };
};
