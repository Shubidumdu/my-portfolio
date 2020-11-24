import { useRef, useEffect, useState } from 'react';

export const useSlick = () => {
  const slick = useRef(null);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    window.addEventListener(
      'wheel',
      (e) => {
        e.preventDefault();
        e.deltaY > 0 ? slick.current.slickNext() : slick.current.slickPrev();
      },
      { passive: false },
    );
  }, []);

  return { ref: slick, index: idx, setIndex: setIdx };
};
