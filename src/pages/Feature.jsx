import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { featuresArray } from "../utils/Utils";

function Feature() {
  return (
    <div className="w-full px-4 py-16 md:px-20 md:py-24 flex md:flex-col text-center sm:py-[96px] sm:px-[32px]  items-center justify-center gap-2 ">
      <div className="flex flex-col items-start justify-center text-center gap-12">
        {/* first div starts here */}

        <div className="flex w-[91vw] flex-col items-center gap-8 m-auto ">
          <div className="flex flex-col justify-center items-center gap-4 self-stretch ">
            <p className="self-stretch text-[#121417] text-center font-Manrope text-[32px] font-semibold leading-10 ">
              Elevating Card Programs with Cutting-Edge Technology
            </p>
            <p className="self-stretch w-[70%] text-[#5A6475] text-center font-Inter text-[18px] font-normal leading-7 m-auto ">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <button className="flex items-center justify-center gap-2 rounded-lg text-[#582066] ">
              <p className="text-center font-Inter text-16px font-medium leading-5 ">
                Compare all Pro features
              </p>
              <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* first div ends here */}

        {/* second div starts here */}
        <div className="flex w-full flex-col md:flex-row items-start justify-center gap-8 md:gap-0 ">
          {featuresArray.map((data) => {
            const { id, icon, title, desc } = data;
            return (
              <div
                key={id}
                className="flex w-[91vw] md:w-[27vw] p-4 flex-col justify-center items-center gap-2  "
              >
                <div className="flex w-[90%] flex-col items-center gap-4 md:gap-2 ">
                  <div className="flex p-4 justify-center items-center gap-2 rounded-[240px] bg-[#F4EFF6]  ">
                    <img
                      src={icon}
                      alt="/globe"
                      className="w-[24px] h-[24px] "
                    />
                  </div>
                  <div className="flex w-[91vw] md:w-[45vw] flex-col items-center gap-4  ">
                    <p className="self-stretch text-[#121417] text-center font-Inter text-[16px] font-medium leading-5 ">
                      {title}
                    </p>
                    <p className="w-[60%] text-center font-Inter text-[14px] font-medium leading-6  ">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* second div ends here */}
      </div>
    </div>
  );
}

export default Feature;
