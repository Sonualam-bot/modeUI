import { logoFirstSet, logoSecondSet } from "../utils/Utils";

function LogoSection() {
  return (
    <div className="flex h-[216px] w-[80%] m-auto items-center justify-center gap-2  px-4 py-16 customWidth2:mt-[50px] mdl:mt-7 ">
      <div className="flex flex-col items-center gap-8 w-[90vw] ">
        <div className="flex w-full flex-col md:flex-row justify-center md:scale-95 items-center gap-6 ">
          {/* first div starts */}
          <div className="flex w-full justify-between items-center ">
            {logoFirstSet.map(({ logo, id }) => {
              return (
                <div
                  key={id}
                  className="flex  flex-col justify-center items-center gap-2 p-2 "
                >
                  <img
                    src={logo}
                    alt="/logo"
                    className="flex h-4 justify-center items-center shrink-0 "
                  />
                </div>
              );
            })}
          </div>
          {/* first div  ends */}
          {/* second div starts */}
          <div className="flex w-full justify-between items-center ">
            {logoSecondSet.map(({ logo, id }) => {
              return (
                <div
                  key={id}
                  className="flex  flex-col justify-center items-center gap-2 p-2 "
                >
                  <img
                    src={logo}
                    alt="/logo"
                    className="flex h-4 justify-center items-center shrink-0 "
                  />
                </div>
              );
            })}
          </div>
          {/* second div  ends */}
        </div>
      </div>
    </div>
  );
}

export default LogoSection;
