import React, { useState } from "react";
import './HomePage.css';

const Slider: React.FC = () => {
    const images: string[] = [
        require('../assets/images/main/shop1.jpg'),
        require('../assets/images/main/shop2.jpg'),
        require('../assets/images/main/shop3.jpg'),
        require('../assets/images/main/shop4.jpg'),
        require('../assets/images/main/shop5.jpg'),
        require('../assets/images/main/shop6.jpg'),
        require('../assets/images/main/shop7.jpg'),
        require('../assets/images/main/shop8.jpg'),
        require('../assets/images/main/shop9.jpg'),
    ];

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      };
    
      const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      };

    return (
        <div className="slider">
          <button onClick={prevSlide} className="sliderButton">
            ❮
          </button>
          <div className="sliderTrack">
            {images.map((image, index) => {
              const position = index === currentIndex ? "active" : index === (currentIndex - 1 + images.length) % images.length
                  ? "left" : index === (currentIndex + 1) % images.length
                  ? "right": "hidden";
    
              return (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className={`sliderImage ${position}`}
                />
              );
            })}
          </div>
          <button onClick={nextSlide} className="sliderButton">
            ❯
          </button>
        </div>
      );
};

export default Slider;