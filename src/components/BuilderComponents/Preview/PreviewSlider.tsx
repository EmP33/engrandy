import React, { useEffect, useState } from 'react';
import { Wrapper } from './PreviewSlider.styles';

const PreviewSlider = () => {
  const [slide, setSlide] = useState(0);
  const timeToSkip = 3000;

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev += 1));
    }, timeToSkip);

    if (slide >= 2) {
      setTimeout(() => {
        setSlide(0);
        clearInterval(interval);
      }, timeToSkip);
    }

    return () => clearInterval(interval);
  }, [slide]);

  return (
    <Wrapper slide={slide}>
      <div className="slides">
        <div className="slide slide--1">SLIDE 1</div>
        <div className="slide slide--2">SLIDE 2</div>
        <div className="slide slide--3">SLIDE 3</div>
      </div>
    </Wrapper>
  );
};

export default PreviewSlider;
