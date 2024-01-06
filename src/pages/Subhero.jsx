import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Subhero() {
  return (
    <div className=" w-[90vw] sm:w-[85vw] flex flex-col items-center justify-center gap-8 absolute top-9 sm:left-[7.4%] ">
      {/* main div  */}
      <div className=" w-full flex flex-col items-center justify-center gap-4  text-center ">
        <div className="w-full text-[#582066] font-Inter text-[16px] font-medium leading-5 ">
          <p>Seamless experience</p>
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-4  ">
          <p
            className="w-full text-[#121417] font-Inter text-[40px] sm:text-[62px]
           font-semibold leading-[48px] sm:leading-[72px] "
          >
            Unleasing the Next{" "}
            <span className="  sm:hidden ">Generation of Card</span>
            <span className="sm:text-[60px] hidden  sm:block ">
              Generation of Card
            </span>{" "}
            <br className="hidden" />
            Solutions
          </p>
          <p className="w-full sm:w-[70%] text-[#5A6A75] text-center font-Inter text-[18px] font-normal leading-7 m-auto ">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </p>
        </div>
      </div>
      {/* second div  */}
      <div className="w-full flex flex-col items-center text-center gap-4 ">
        <div className="flex w-full flex-col justify-center items-center gap-2">
          <button className="w-full sm:w-[200px] flex p-4 justify-center items-center gap-2 rounded-lg bg-[#582066] flex-1 sm:flex-none text-white ">
            <p>Unlock your card</p>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <p className="w-full text-[#5A6475] font-Inter text-[14px] font-medium leading-5 ">
          *No credit card required
        </p>
      </div>
    </div>
  );
}

export default Subhero;
