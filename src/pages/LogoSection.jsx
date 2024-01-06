import nuxt from "../assets/nuxt.svg";
import miro from "../assets/miro.svg";
import lottefiles from "../assets/lottiefiles.png";
import wise from "../assets/wise.svg";
import dribble from "../assets/dribble.svg";
import kinsta from "../assets/kinsta.png";
import behance from "../assets/behance.svg";
import angelList from "../assets/angelList.svg";

function LogoSection() {
  const logoFirstSet = [
    {
      id: 1,
      logo: nuxt,
    },
    {
      id: 2,
      logo: miro,
    },
    {
      id: 3,
      logo: lottefiles,
    },
    {
      id: 4,
      logo: wise,
    },
  ];

  const logoSecondSet = [
    {
      id: 1,
      logo: dribble,
    },
    {
      id: 2,
      logo: kinsta,
    },
    {
      id: 3,
      logo: angelList,
    },
    {
      id: 4,
      logo: behance,
    },
  ];

  return (
    <div className="flex h-[216px] w-full items-center justify-center gap-2  px-4 py-16 customWidth2:mt-[50px] mdl:mt-7 ">
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
