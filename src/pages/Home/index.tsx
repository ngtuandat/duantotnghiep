import React from "react";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Slider from "../../components/Slider";

const Home = () => {
  return (
    <div>
      <div>
        <Header />
        <div className="">
          <img
            className="h-[770px] w-full"
            src="./images/bannerhotel1.jpeg"
            alt=""
          />
          <div className="absolute  left-1/2 -bottom-10 transform translate-x-[-50%]">
            <Slider />
          </div>
        </div>
      </div>
      <Container />
    </div>
  );
};

export default Home;
