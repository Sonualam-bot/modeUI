import wise from "../assets/wise.svg";
import avatar from "../assets/avatar.svg";
import rating from "../assets/rating.svg";

function Testimonial() {
  return (
    <div className="flex py-16 px-4 justify-center items-center gap-2  ">
      <div className="flex md:w-[90%] flex-col items-center gap-12 ">
        <div className="flex w-[343px] md:w-[80%] text-center m-auto flex-col items-center gap-8  ">
          <img src={wise} alt="/logo" className="w-[90px] h-[24px] " />
          <p className="text-[#24282F] font-Manrope text-[20px] md:text-[32px] font-medium leading-6 md:leading-10 ">
            I had the pleasure of experiencing the next generation of card
            solutions with this incredible product. It&apos;s refreshing to see
            such innovation in the financial industry.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 ">
          <div className="flex flex-col justify-center items-center gap-4 ">
            <div className="flex w-[64px] h-[64px] justify-center items-center ">
              <img
                src={avatar}
                alt="/avatar"
                className="w-full h-full shrink-0 "
              />
            </div>
            <div className="flex w-[134px] flex-col items-center gap-1 font-Inter font-normal ">
              <p className="text-[#121417] text-[16px] leading-[20px] ">
                Lead Designer
              </p>
              <p className="text-[#5A6475] text-[14px] leading-[20px] ">
                Lead Designer
              </p>
            </div>
          </div>
          <div className="flex px-2 py-1 flex-col justify-center items-center gap-2 self-stretch ">
            <div className="flex items-start gap-3 ">
              <img src={rating} alt="/rating" className=" w-4 h-4 " />
              <img src={rating} alt="/rating" className=" w-4 h-4 " />
              <img src={rating} alt="/rating" className=" w-4 h-4 " />
              <img src={rating} alt="/rating" className=" w-4 h-4 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
