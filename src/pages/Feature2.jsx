import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import mobile from "../assets/phone.png";
import stick from "../assets/stick.png";
import star from "../assets/star.svg";
import frame1 from "../assets/frame1.svg";
import frame from "../assets/frame.svg";
import stick1 from "../assets/stick1.svg";

function Feature2() {
  return (
    <div className="w-full px-4 py-16 md:px-20 md:py-24 flex md:flex-col text-center sm:py-[96px] sm:px-[32px]  items-center justify-center gap-2 ">
      <div className="flex flex-col items-start justify-center text-center gap-12">
        {/* first div starts here */}

        <div className="flex w-[91vw] flex-col items-center gap-8 m-auto ">
          <div className="flex flex-col justify-center items-center gap-4 self-stretch ">
            <p className="self-stretch text-[#121417] text-center font-Manrope text-[32px] font-semibold leading-10 ">
              Elevating Card Programs with Cutting-Edge Technology
            </p>
            <p className="self-stretch w-[70%] m-auto text-[#5A6475] text-center font-Inter text-[18px] font-normal leading-7 ">
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
        <div className="flex flex-col md:flex-row items-start gap-6  m-auto ">
          {/* ******** */}
          <div className="flex w-[363px] h-[284px] pt-[19px] pr-[34px] -pb-0 pl-[33px] justify-center items-center rounded-lg bg-[#F4EFF6]  relative ">
            <div className="absolute top-3 left-8 ">
              <img src={star} alt="/star" />
            </div>
            <div className="absolute left-[68px] -rotate-[8deg] top-9 ">
              <img src={stick} alt="/stick" />
              <div className="w-[10.5px] h-[24.121px] bg-[#3D166C] rounded-br-[5px] rounded-bl-[5px] -rotate-[36deg] top-[58px] absolute z-10  left-[47.8px]  "></div>
            </div>
            <div className="ml-[35px] -mb-8 ">
              <img src={mobile} alt="/mobile" />
            </div>
          </div>

          {/* ****** */}
          <div className="flex w-[363px] h-[284px] pt-[45px] pr-[32px] pb-[54.5px] pl-[32px] justify-center items-center rounded-lg bg-[#F4EFF6]  relative ">
            <div className="absolute top-14 left-9 ">
              <img src={star} alt="/star" />
            </div>
            {/* right side div  */}
            <div className="flex flex-col items-start gap-[17.5px] border p-3 rounded-lg bg-[#FAF9FF] ">
              {/* first div  */}
              <div className="flex items-start gap-[139.5px]">
                <div className="flex flex-col items-start gap-[3.09px] ">
                  <p className="text-[#121417] font-Manrope text-[12.3px] font-semibold leading-[16.5px] ">
                    Spending
                  </p>
                  <div className="flex items-center gap-[3.09px">
                    <img
                      src={frame}
                      alt="/"
                      className="w-[12.3px] h-[12.3px] "
                    />
                    <p className="text-[#5A6475] font-Inter text-[8.2px] font-medium leading-[10.2px] ">
                      9349 visa card
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    src={frame1}
                    alt="/"
                    className="w-[12.3px] h-[12.3] text-[#2C3E50] "
                  />
                </div>
              </div>
              {/* first div  */}

              {/* second div  */}
              <div className="flex flex-col justify-center items-start gap-[6.1px]">
                <div className="flex items-center gap-[5.6px] text-[#121417]  font-medium ">
                  <p className="font-Manrope text-[20.5px]  leading-[24.7px] ">
                    127.14
                  </p>
                  <p className="font-Inter text-[8.2px] leading-[10.2px] ">
                    USD
                  </p>
                </div>
                <div className="flex items-start gap-[19px] text-[#5A6475] font-Inter font-medium text-[8.2px] ">
                  <p className="leading-[10.2px] "> vs last week </p>
                  <p className="leading-[10.2px] ">
                    {" "}
                    Last Purchased (Feb 24 19:59 UTC-5){" "}
                  </p>
                </div>
              </div>
              {/* second div  */}
              <div className="flex flex-col justify-center items-start gap-[3.6px] ">
                <div className="flex items-start justify-between text-[#5A6475] font-Inter text-[8.2px] font-medium leading-[10.2px]  ">
                  <p>4000 USD</p>
                  <p>1000 USD</p>
                  <p>5000 USD</p>
                </div>
                <div className="flex items-start gap-[2.05px] ">
                  <div className="w-[64.8px] h-[7.7px] rounded-tr-[8.2px] rounded-tl-[8.2px] bg-[#582066] "></div>
                  <div>
                    <img
                      src={stick1}
                      alt="/stick"
                      className="w-[89.6px] h-[7.7px] "
                    />
                  </div>
                  <div className="w-[64.8px] h-[7.7px] rounded-tr-[8.2px] rounded-tl-[8.2px] bg-[#EFE4F2] "></div>
                </div>
              </div>
              {/* third div  */}
            </div>
            {/* right side div  */}
          </div>
        </div>
        {/* second div ends here */}
      </div>
    </div>
  );
}

export default Feature2;
