import Header from "../components/header.component";
import Image from "next/image";
import ImportIMG from "../../public/import.svg";
import ImportIMG2 from "../../public/import2.svg";
import Kapom from "../../public/Frame 4.svg";

export default function DashboardItemsPage() {
  return (
    <div className="flex flex-col w-full h-screen relative">
      <Header headerName="Dashboard" />
      <div className="flex flex-row justify-around items-center">
        <button className="text-lg border-2 w-[187px] h-[37px] border-mainGreen bg-mainGreen text-black rounded-xl mt-6 flex flex-rows justify-start items-center pl-4">
          <Image src={ImportIMG} alt="ImportIMG" />
          <span className="pl-2">Add New Project</span>
        </button>
        <button className="text-lg border-2 w-[187px] h-[37px] border-mainGreen bg-black text-mainGreen rounded-xl mt-6 flex flex-rows justify-start items-center pl-5">
          <Image src={ImportIMG2} alt="ImportIMG2" />
          <span className="pl-2"> Import Project</span>
        </button>
      </div>
      {/* Items Show List */}
      <div className="flex flex-rows justify-around mt-[10px] w-full">
        <div className="flex flex-col justify-center items-center bg-white w-[45%] rounded-lg ">
          <div className="flex flex-col justify-center items-center bg-white w-[95%] rounded-lg m-3">
            <Image src={Kapom} alt="Kapom" className="w-full" />
            <span className="pl-2 text-black">Project Name</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-white w-[45%] rounded-lg ">
          <div className="flex flex-col justify-center items-center bg-white w-[95%] rounded-lg m-3">
            <Image src={Kapom} alt="Kapom" className="w-full" />
            <span className="pl-2 text-black">Project Name</span>
          </div>
        </div>
      </div>
      <div className="flex flex-rows justify-around mt-[20px] w-full">
        <div className="flex flex-col justify-center items-center bg-white w-[45%] rounded-lg ">
          <div className="flex flex-col justify-center items-center bg-white w-[95%] rounded-lg m-3">
            <Image src={Kapom} alt="Kapom" className="w-full" />
            <span className="pl-2 text-black">Project Name</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-black w-[45%] rounded-lg ">
         
        </div>
      </div>
    </div>
  );
}
