import Subhero from "./Subhero";

function Hero() {
  const numberOfVerticalLines = 39;
  const numberOfHorizontalLines = 27;

  const verticalLines = Array.from(
    { length: numberOfVerticalLines },
    (_, index) => (
      <div
        key={index}
        className="w-[0.857px] h-[210px] sm:h-[310px] md:h-[270px] bg-[#F4EFF6]
       "
      ></div>
    )
  );

  const horizontalLines = Array.from(
    { length: numberOfHorizontalLines },
    (_, index) => (
      <div
        key={index}
        className="w-[94vw] sm:w-[70vw] md:w-[53vw] h-[0.857px]  bg-[#F4EFF6] "
      ></div>
    )
  );

  return (
    <div className=" flex flex-col px-4 pt-16 pb-8 relative ">
      <div className="w-full flex items-center justify-center ">
        <div className="w-[90vw] sm:w-[65vw] md:w-[50vw] h-[200px] sm:h-[310px] md:h-[310px]  text-[#F4EFF6] flex flex-row justify-between items-center ">
          {verticalLines}
        </div>

        <div className="w-[90vw]  h-[200px] sm:h-[290px] md:h-[240px]   text-[#F4EFF6] flex flex-col justify-between items-center absolute ">
          {horizontalLines}
        </div>
      </div>
      <Subhero />
    </div>
  );
}

export default Hero;
