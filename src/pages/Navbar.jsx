import modeUILogo from "../assets/modeUi.svg";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faBars,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className=" mx-auto flex justify-center border bottom-[1px] border-[#E6E7E9] px-4 py-5   md:px-20 sm:px-8 ">
      <div className=" w-full sm:w-[95%] md:w-full h-auto flex items-center justify-between ">
        <div>
          <img src={modeUILogo} alt="/logo" />
        </div>

        {/* mid section starts here  */}
        <div className="md:flex items-center justify-center gap-7 text-[#363C46] hidden w-[60%] ">
          <div className="flex items-center justify-center gap-3">
            <p>Card access</p>
            <FontAwesomeIcon icon={faAngleDown} className="mt-1" />
          </div>
          <div>
            <p>Banking</p>
          </div>
          <div>
            <p>Processing</p>
          </div>
          <div>
            <p>About</p>
          </div>
          <div>
            <p>Career</p>
          </div>
          <div>
            <p>Contact</p>
          </div>
        </div>

        {/* mid section starts here  */}

        <div className="flex gap-5 items-center justify-center ">
          <div className="flex gap-2 items-center justify-center bg-[#E6E7E9] text-[#5A6475] py-2 px-3 rounded-xl font-semibold ">
            <p>Login</p>
            <FontAwesomeIcon icon={faRightToBracket} />
          </div>
          <div className="md:hidden">
            <FontAwesomeIcon icon={faBars} className="w-6 h-6  " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
