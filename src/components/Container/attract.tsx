import React, { useState } from "react";
import { start } from "repl";
import { Attracts } from "../../data/mockdata";
import { AttractsProps } from "../../types";

const Attract = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) => prevIndex + 1);
  // };
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) => prevIndex + 1);
  // };

  // const scrollContainerRef = React.useRef<any>(null);

  // React.useEffect(() => {
  //   const scrollContainer = scrollContainerRef.current;
  //   scrollContainer.scrollTo({
  //     left: startIndex * scrollContainer.offsetWidth,
  //     behavior: "smooth",
  //   });
  // }, [startIndex]);

  const [startIndex, setStartIndex] = useState(0);
  console.log(startIndex, "startIndex");

  const handleNext = () => {
    setStartIndex((prevIndex) => prevIndex + 7);
  };

  const handlePrevious = () => {
    setStartIndex((prevIndex) => prevIndex - 7);
  };
  console.log(startIndex, "xxxxsxsxs");
  console.log(startIndex + 8, "loghocai");
  const visibleAttracts = Attracts.slice(startIndex, startIndex + 8);
  console.log(visibleAttracts, "visibleAttracts");
  console.log(Attracts.length, "loghocaixxx");

  return (
    <div>
      <div className="text-2xl text-[#2A2A2E] font-medium flex justify-center">
        Các điểm thu hút nhất Việt Nam
      </div>
      <div className="flex gap-x-8 whitespace-nowrap overflow-hidden">
        {visibleAttracts.map((item: AttractsProps, index) => (
          <div
            className="flex flex-col items-center"
            style={{ minWidth: "124px" }}
          >
            <img
              className="w-[124px] h-[124px] rounded-full object-cover"
              src={item.image}
              alt=""
            />
            <div>{item.title}</div>
            <div>{item.accommodation} chỗ ở</div>
            <div>{index}</div>
          </div>
        ))}
      </div>
      <div>
        <button onClick={handlePrevious} disabled={startIndex === 0}>
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={startIndex + 8 >= Attracts.length}
        >
          Next
        </button>
      </div>
    </div>
    // <div>
    //   <div className="text-2xl text-[#2A2A2E] font-medium flex justify-center">
    //     Các điểm thu hút nhất Việt Nam
    //   </div>
    //   <div className="flex gap-x-8 whitespace-nowrap overflow-hidden">
    //     {Attracts.map((item: AttractsProps) => (
    //       <div
    //         className="flex flex-col items-center"
    //         style={{ minWidth: "124px" }}
    //       >
    //         <img
    //           className="w-[124px] h-[124px] rounded-full object-cover "
    //           src={item.image}
    //           alt=""
    //         />
    //         <div>{item.title}</div>
    //         <div>{item.accommodation} chỗ ở</div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    // <div>
    //   <div className="text-2xl text-[#2A2A2E] font-medium flex justify-center">
    //     Các điểm thu hút nhất Việt Nam
    //   </div>
    //   <div className="flex gap-x-8 whitespace-nowrap overflow-hidden">
    //     {Attracts.slice(currentIndex, currentIndex + 8).map(
    //       (item: AttractsProps) => (
    //         <div
    //           className="flex flex-col items-center"
    //           style={{ minWidth: "124px" }}
    //         >
    //           <img
    //             className="w-[124px] h-[124px] rounded-full object-cover"
    //             src={item.image}
    //             alt=""
    //           />
    //           <div>{item.title}</div>
    //           <div>{item.accommodation} chỗ ở</div>
    //         </div>
    //       )
    //     )}
    //   </div>
    //   {currentIndex + 6 < Attracts.length && (
    //     <button onClick={handleNext}>Next</button>
    //   )}
    // </div>
    // <div>
    //   <div className="text-2xl text-[#2A2A2E] font-medium flex justify-center">
    //     Các điểm thu hút nhất Việt Nam
    //   </div>
    //   <div
    //     className="flex gap-x-8 whitespace-nowrap overflow-hidden"
    //     ref={scrollContainerRef}
    //     style={{ scrollBehavior: "smooth", overflowX: "scroll" }}
    //   >
    //     {Attracts.map((item: AttractsProps) => (
    //       <div
    //         key={item.title}
    //         className="flex flex-col items-center"
    //         style={{ minWidth: "124px" }}
    //       >
    //         <img
    //           className="w-[124px] h-[124px] rounded-full object-cover"
    //           src={item.image}
    //           alt=""
    //         />
    //         <div>{item.title}</div>
    //         <div>{item.accommodation} chỗ ở</div>
    //       </div>
    //     ))}
    //   </div>
    //   {currentIndex + 8 < Attracts.length && (
    //     <button onClick={handleNext}>Next</button>
    //   )}
    // </div>
  );
};

export default Attract;
