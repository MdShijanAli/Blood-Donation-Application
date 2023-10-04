import { useState } from "react";
import slider1 from "../assets/images/home_1_slider_1.jpg"
import slider2 from "../assets/images/home_1_slider_2.jpg"
import {IoIosArrowForward, IoIosArrowBack} from "react-icons/io"
import { Link } from "react-router-dom";


const HomeSlider = () => {

  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      imageSrc: slider1,
      topText: 'Donate blood, save life !',
      text: 'Your Blood Can Bring Smile In Other Person Face',
      callbackText: 'Donate Now',
      link: "https://www.facebook.com/"
    },
    {
      imageSrc: slider2,
      topText: 'Donate blood, save life !',
      text: 'Donate Blood and Inspires Others',
      callbackText: 'Donate Now',
      link: "https://www.facebook.com/"
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  
  return (
    <div className="relative w-full h-screen overflow-hidden group">


      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slider-item absolute h-full w-full transform transition-transform duration-300 ${
              index === activeSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
          >
            <img src={slide.imageSrc} alt={`Slide ${index + 1}`} className="w-full h-full" />
            <div className="absolute inset-0 flex items-center justify-center ">
                <div className="text-white mx-20 md:mx-40 xl:mx-80">
                  <p className="md:text-4xl text-3xl"> {slide.topText}</p>
                  <h3 className="xl:text-7xl md:5xl text-4xl uppercase font-bold my-6 md:my-5">{slide.text}</h3>
                <Link to={slide.link}>
                <button
                    className="md:w-60 w-52 h-12 md:h-16 bg-[#EF3D32] text-2xl font-semibold hover:bg-[#516A86] transition-color duration-500 text-white"
                    onClick={() => console.log(`Clicked on callback for slide ${index + 1}`)}
                  >
                    {slide.callbackText}
                  </button>
                </Link>
                </div>
              </div>
          </div>
        ))}
      </div>
      
      
      <button
        className="absolute hidden group-hover:block top-1/2 left-4 transform -translate-y-1/2 p-2 "
        onClick={prevSlide}
      >
        <IoIosArrowBack className="md:w-20 w-10 h-10 md:h-20 text-white hover:text-[#EF3D32] transition-color duration-500" />
      </button>
      <button
        className="absolute hidden group-hover:block top-1/2 right-4 transform -translate-y-1/2 p-2 "
        onClick={nextSlide}
      >
         <IoIosArrowForward className="md:w-20 w-10 h-10 md:h-20 text-white hover:text-[#EF3D32] transition-color duration-500" />
      </button>
    


      </div>
    // </div>
  );
};

export default HomeSlider;



