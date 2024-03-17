import React, {useState} from "react";
import { img_ele, img_hang, img_wom } from "../../assets/assest";
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import SearchBar from '../SearchBar/SearchBar';


const Slider = ()=>{
  const slides = [
    {
      url: img_ele,
    },
    {
      url: img_hang,
    },
    {
      url: img_wom
    }
  ];

const [currIndex, setCurrIndex] = useState(0);

const prevSlide = ()=>{
  const isFirstSlide = currIndex === 0;
  const newIndex = isFirstSlide ? slides.length - 1 : currIndex - 1;
  setCurrIndex(newIndex);
}
const nextSlide = ()=>{
  const isLastSlide = currIndex === slides.length - 1;
  const newIndex = isLastSlide ? 0 : currIndex + 1;
  setCurrIndex(newIndex);
  
}

const goToSlide = (slideIndex)=>{
  setCurrIndex(slideIndex);
}
  return (
    <>
    <div className='max-w-full h-[580px] w-full m-auto py-1 px-1 relative group'>
      <div style = {{backgroundImage: `url(${slides[currIndex].url})`}} className='w-full h-full 
      rounded-2xl bg-center bg-cover duration-500 opacity-50'> </div>

      {/*Left arrow*/}
      <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 
      translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30}/>
      </div>
      {/*Right arrow*/}
      <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] 
      right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30}/>
      </div>

      <div className='flex top-4 justify-center py-2 relative'>

        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
          </div>
       ))}
    
      </div>
      
      
    </div>
    <div className="flex justify-center">
      <SearchBar/>
    </div>
  </>
  );
}

export default Slider;
