import { metricData } from "../utils/Utils";

function Metric() {
  return (
    <div className="flex px-4 py-16 justify-center items-center gap-2 md:py-[96px] md:px-[80px] ">
      <div className="flex w-[343px] justify-center items-center gap-2 ">
        <div className="flex  flex-col md:flex-row items-center gap-8 md:gap-0 flex-auto ">
          {metricData.map((data) => {
            const { id, title, use, desc } = data;
            return (
              <div
                key={id}
                className="flex p-4 md:p-2 flex-col justify-center items-center gap-2 md:gap-1 self-stretch "
              >
                <div className="flex w-[223px] md:w-[215px] flex-col items-center gap-4 ">
                  <p className="text-[#582066] text-center font-Manrope text-[40px] font-semibold leading-[48px] ">
                    {" "}
                    {title}{" "}
                  </p>
                  <div className="flex flex-col items-start gap-2 self-stretch ">
                    <p className="text-[#121417] text-center m-auto font-Inter text-[16px] font-medium leading-5  ">
                      {" "}
                      {use}{" "}
                    </p>
                    <p className="text-[#5A6475] text-center font-Inter text-[17px] font-normal leading-7  ">
                      {" "}
                      {desc}{" "}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Metric;
