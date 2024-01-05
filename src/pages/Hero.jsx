function Hero() {
  const numberOfVerticalLines = 39;
  const numberOfHorizontalLines = 27;

  const verticalLines = Array.from(
    { length: numberOfVerticalLines },
    (_, index) => (
      <div
        key={index}
        className="w-[0.857px] h-[200px] bg-[#F4EFF6]
       "
      ></div>
    )
  );

  const horizontalLines = Array.from(
    { length: numberOfHorizontalLines },
    (_, index) => (
      <div key={index} className="w-[343px] h-[0.857px] bg-[#F4EFF6] "></div>
    )
  );

  return (
    <div className="flex flex-col px-4 pt-16 pb-8 relative ">
      {/* <div className=""> */}
      <div className="w-[343px] h-[200px] text-[#F4EFF6] flex flex-row justify-between items-center ">
        {verticalLines}
      </div>
      <div className="w-[343px] h-[200px] text-[#F4EFF6] flex flex-col justify-between items-center absolute ">
        {horizontalLines}
      </div>
      {/* </div> */}
    </div>
  );
}

export default Hero;
