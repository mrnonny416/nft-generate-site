import Header from "../components/header.component";
import Image from "next/image";
import ImportIMG from "../../public/import.svg";
import ImportIMG2 from "../../public/import2.svg";
import Kapom from "../../public/Frame 4.svg";
import X from "../../public/X.svg";
import Discord from "../../public/Dis.svg";
import Telegram from "../../public/Tele.svg";

export default function MarketPage() {
  return (
    <div className="flex flex-col w-full h-screen relative">
      <Header headerName="Market" />
      <div className="flex flex-rows justify-around mt-[10px] w-full">
        <div className="flex flex-col justify-center items-center bg-white w-[45%] rounded-lg ">
          <div className="flex flex-col justify-center items-center bg-white w-[95%] rounded-lg m-3">
            <Image src={Kapom} alt="Kapom" className="w-full" />
            <span className="pl-2 text-black">Project Name</span>
            <div className="flex flex-rows justify-center items-center bg-black w-[95%] rounded-lg mt-3">
              <div>
                <Image src={X} alt="X" className="w-[22px] m-4" />
              </div>
              <div>
                <Image src={Discord} alt="Discord" className="w-[22px] m-4" />
              </div>
              <div>
                <Image src={Telegram} alt="Telegram" className="w-[22px] m-4" />
              </div>
            </div>
            <div className="flex flex-rows justify-center items-center bg-black w-[95%] h-[50px] rounded-lg mt-1">
              <span className="pl-2 text-mainGreen">Entry</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-white w-[45%] rounded-lg ">
          <div className="flex flex-col justify-center items-center bg-white w-[95%] rounded-lg m-3">
            <Image src={Kapom} alt="Kapom" className="w-full" />
            <span className="pl-2 text-black">Project Name</span>
            <div className="flex flex-rows justify-center items-center bg-black w-[95%] rounded-lg mt-3">
              <div>
                <Image src={X} alt="X" className="w-[22px] m-4" />
              </div>
              <div>
                <Image src={Discord} alt="Discord" className="w-[22px] m-4" />
              </div>
              <div>
                <Image src={Telegram} alt="Telegram" className="w-[22px] m-4" />
              </div>
            </div>
            <div className="flex flex-rows justify-center items-center bg-black w-[95%] h-[50px] rounded-lg mt-1">
              <span className="pl-2 text-mainGreen">Entry</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-rows justify-around mt-[20px] w-full">
        <div className="flex flex-col justify-center items-center bg-white w-[45%] rounded-lg ">
          <div className="flex flex-col justify-center items-center bg-white w-[95%] rounded-lg m-3">
            <Image src={Kapom} alt="Kapom" className="w-full" />
            <span className="pl-2 text-black">Project Name</span>
            <div className="flex flex-rows justify-center items-center bg-black w-[95%] rounded-lg mt-3">
              <div>
                <Image src={X} alt="X" className="w-[22px] m-4" />
              </div>
              <div>
                <Image src={Discord} alt="Discord" className="w-[22px] m-4" />
              </div>
              <div>
                <Image src={Telegram} alt="Telegram" className="w-[22px] m-4" />
              </div>
            </div>
            <div className="flex flex-rows justify-center items-center bg-black w-[95%] h-[50px] rounded-lg mt-1">
              <span className="pl-2 text-mainGreen">Entry</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-black w-[45%] rounded-lg "></div>
      </div>
    </div>
  );
}
