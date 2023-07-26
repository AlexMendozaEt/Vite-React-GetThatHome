import { useState } from "react";
import PropTypes from "prop-types";

import {
  DotContainer,
  DotsContainer,
  LeftArrowContainer,
  RightArrowContainer,
  StyledDiv,
  StyledImg,
} from "./styles";

export function ImagesSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <StyledDiv>
        <LeftArrowContainer onClick={goToPrevious}>❰</LeftArrowContainer>
        <StyledImg src={slides[currentIndex]} />
        <RightArrowContainer onClick={goToNext}>❱</RightArrowContainer>
      </StyledDiv>
      <DotsContainer>
        {slides.map((slide, slideIndex) => (
          <DotContainer
            className={slideIndex === currentIndex ? "active" : ""}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </DotContainer>
        ))}
      </DotsContainer>
    </>
  );
}

ImagesSlider.propTypes = {
  slides: PropTypes.array,
};
