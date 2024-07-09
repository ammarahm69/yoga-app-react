import slide1 from '../assets/slider-1.webp';
import slide2 from '../assets/slider-2.webp';
import slide3 from '../assets/slider-3.webp';
import slide4 from '../assets/slider-4.webp';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from 'react';

function Carousels() {
  const slides = [
    { url: slide1 },
    { url: slide2 },
    { url: slide3 },
    { url: slide4 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <div className='set-slider m-auto py-16 px-4 relative'>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className=' w-full h-full rounded-full bg-center bg-cover duration-500 absolute bottom-6'
        ></div>
      </div>
    </>
  );
}

export default Carousels;
