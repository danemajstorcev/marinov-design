import React, { useState } from "react";
import Image from "next/image";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div
        className="slides-container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            className="slide"
            src={image}
            alt={`Slide ${index + 1}`}
            width={800} // Replace with actual width
            height={600} // Replace with actual height
          />
        ))}
      </div>

      <div className="arrows">
        <Image
          className="arrow prev"
          onClick={prevSlide}
          src="/images/our_story_page/arrow-left.png"
          alt="Previous slide"
          width={24}
          height={24}
        />

        <Image
          className="arrow next"
          onClick={nextSlide}
          src="/images/our_story_page/arrow-right.png"
          alt="Next slide"
          width={24}
          height={24}
        />
      </div>

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
