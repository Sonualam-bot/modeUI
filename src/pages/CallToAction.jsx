import creditCard from "../assets/credit-card.svg";
import headphones from "../assets/headphones.svg";

function CallToAction() {
  return (
    <div className="flex w-[343px] sm:w-[90vw] md:w-[768px] flex-col justify-center items-center m-auto gap-2 py-16 px-4 ">
      <div className="flex w-full flex-col items-start gap-8 ">
        <p className="text-[#121417] text-center font-Manrope text-[32px] font-semibold leading-[40px]  ">
          Unlock Limitless Possibilities with Our New Card Solutions
        </p>
        <div className="flex w-full flex-col sm:flex-row items-center m-auto justify-center gap-2 ">
          <button className="flex py-[12px] px-[16px] justify-center items-center rounded-lg bg-[#582066] gap-2  ">
            <p className="text-[#FFF] text-center font-Inter text-[16px] font-medium leading-5 ">
              Unlock your card
            </p>
            <img src={creditCard} alt="/card" className="w-[20px] h-[20px] " />
          </button>
          <button className="flex py-[12px] px-[16px] justify-center items-center rounded-lg bg-[#EEEFEF] gap-2  ">
            <p className="text-[#5A6475] text-center font-Inter text-[16px] font-medium leading-5 ">
              Unlock your card
            </p>
            <img src={headphones} alt="/card" className="w-[20px] h-[20px] " />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
