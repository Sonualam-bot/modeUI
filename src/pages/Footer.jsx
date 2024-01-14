import github from "../assets/github.svg";
import linkedln from "../assets/linkedln.svg";
import discord from "../assets/discord.svg";
import modeui from "../assets/modeUi.svg";
import { footerArray1 } from "../utils/Utils";

function Footer() {
  return (
    <div className="flex pt-[48px] px-4 pb-[40px] md:pt-[96px] md:px-[80px] md:pb-[40px] border-t border-t[#E6E7E9] md:m-auto ">
      <div className="flex w-[343px] md:w-[1040px] sm:w-[100%] flex-col items-start md:items-center gap-16 m-auto ">
        {/* footer  */}
        <div className="flex flex-col w-full md:items-center items-start gap-8 self-stretch ">
          <div className="flex flex-col items-start md:items-center md:justify-center md:text-center m-auto gap-8 self-stretch ">
            <div className="flex md:w-[512px] flex-col justify-center items-start md:items-center gap-4 self-stretch ">
              <div className="flex py-1 px-0 flex-col items-start    gap-2 ">
                <img src={modeui} alt="/logo" className="w-[84px] h-4 " />
              </div>

              <p className="self-stretch text-[#5A6475] font-Inter text-[16px] font-medium leading-7  ">
                Mode UI is a comprehensive design system that empowers designers
                and developers to create cohesive and visually stunning user
                interfaces across various platforms and devices
              </p>
            </div>
          </div>
          <div className=" w-[343px] h-[1px] bg-[#F1F1F2] "></div>

          {/* footer content  */}
          <div className="flex flex-col md:flex-row md:w-full  items-start gap-16 self-stretch md:justify-center ">
            <div className="flex flex-col sm:flex-row  md:flex-row items-start gap-8 sm:gap-16 md:w-[40%] md:justify-between self-stretch ">
              {footerArray1.slice(0, 2).map((data) => {
                const { id, title, tags } = data;
                return (
                  <div
                    key={id}
                    className="flex flex-col items-start gap-6 self-stretch "
                  >
                    <p className="self-stretch text-[#24282F] font-Inter text-[16px] font-bold leading-5 ">
                      {title}
                    </p>
                    {tags.map((tag, index) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-col items-start gap-4 self-stretch "
                        >
                          <p className="text-[#363C46] font-Inter text-[16px] font-medium leading-5 ">
                            {" "}
                            {tag}{" "}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col md:flex-row  items-start gap-8 md:w-[60%] sm:flex-row sm:gap-8 md:justify-between self-stretch ">
              {footerArray1.slice(2, 5).map((data) => {
                const { id, title, tags } = data;
                return (
                  <div
                    key={id}
                    className="flex flex-col items-start gap-6 self-stretch "
                  >
                    <p className="self-stretch text-[#24282F] font-Inter text-[16px] font-bold leading-5 ">
                      {title}
                    </p>
                    {tags.map((tag, index) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-col items-start gap-4 self-stretch "
                        >
                          <p className="text-[#363C46] font-Inter text-[16px] font-medium leading-5 ">
                            {" "}
                            {tag}{" "}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          {/* footer content  */}
        </div>
        {/* footer  */}

        {/* social links  */}
        <div className="flex flex-col items-start md:items-center sm:items-center gap-6 self-stretch ">
          <div className="flex items-start ">
            <div className="flex justify-center items-center gap-6  ">
              <img src={github} alt="/github" className="w-5 h-5 " />
              <img src={linkedln} alt="/linkedln" className="w-5 h-5 " />
              <img src={discord} alt="/disord" className="w-5 h-5 " />
            </div>
          </div>
          <p className=" text-[#5A6475] font-Inter text-[14px] font-normal leading-5 ">
            © 2023 Mode UI Inc. All Rights Reserved.
          </p>
        </div>
        {/* social links  */}
      </div>
    </div>
  );
}

export default Footer;
