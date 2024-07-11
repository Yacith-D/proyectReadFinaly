import { useState, useEffect } from 'react';
import './carrusel.css';

const images = [
  'https://cdn.prod.website-files.com/636a2d3c26aa845d12b17679/645a5a5b722c712a9f2b4102_2019-11-04-rolex-submariner-date-ref-116610ln-49.webp',
  'https://www.bobswatches.com/rolex-blog/wp-content/uploads/2020/08/Screen-Shot-2021-08-23-at-2.03.29-PM.jpg',
  'https://www.swisswatchexpo.com/TheWatchClub/wp-content/uploads/2023/10/10-Most-Popular-Rolex-Daytona-Models-Rolex-Daytona-John-Mayer-Yellow-Gold-Green-Dial-116508.jpg'
];
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  );
};
export default Carousel;