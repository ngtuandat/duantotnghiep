import React, { useState } from "react";

const Slider = () => {
  const images = [
    // "./images/logo.png",
    // "./images/logo1.jpg",
    // "./images/bannerhotel.jpeg",
    "./images/anh1.jpg",
    "./images/anh2.jpg",
    "./images/anh3.jpg",
    "./images/anh4.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  console.log(currentImageIndex, "currentImageIndex");

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : 0
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex + 1 < images.length ? prevIndex + 1 : prevIndex
    );
  };

  return (
    <div className="bg-white shadow-md py-5 px-5">
      <div className="text-[30px] font-normal">HolaTech Luxury Hotel</div>
      {/* <div>
        <button className="hover:cursor-pointer" onClick={goToPreviousImage}>
          Previous
        </button>
        <img src={images[currentImageIndex]} alt="Slideshow" />
        <button onClick={goToNextImage}>Next</button>
      </div> */}
      <div className=" ">
        <div className=" grid grid-cols-3 gap-8">
          {images
            .slice(currentImageIndex, currentImageIndex + 3)
            .map((image, index) => (
              <img
                className="w-350px] h-[250px]"
                key={index}
                src={image}
                alt="Slideshow"
              />
            ))}
        </div>
        <div className="slideshow-controls">
          <button className="hover:cursor-pointer" onClick={goToPreviousImage}>
            Previous
          </button>
          <button
            onClick={goToNextImage}
            disabled={currentImageIndex + 3 >= images.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
