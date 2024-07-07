import Header from "../components/header.component";
import Image from "next/image";
import ImportIMG from "../../public/import.svg";
import ImportIMG2 from "../../public/import2.svg";
import Warning from "../../public/Warning.svg";
import Link from "next/link";

export default function DashboardPage(props: any) {
  const { typePageDashboard } = props
  const chkTypePage = () => {
    typePageDashboard(true);
  };
  return (
    <div className="flex flex-col w-full h-screen relative">
      <Header headerName="Dashboard" />
      <div className="flex flex-col justify-center items-center px-3 h-screen relative z-20 ">
        <div className="flex flex-rows justify-start mb-40 mt-20">
          <Image src={Warning} alt="Warning" className="w-[60px]" />
          <div className="pl-5">
            <div className="text-2xl text-white mt-4">
              Not have Project yet, Please
            </div>
            <div className="text-2xl text-white mt-4">
              Create or Import your own,
            </div>
          </div>
        </div>
        <button className="text-lg border-2 w-[187px] h-[37px] border-mainGreen bg-mainGreen text-black rounded-xl mt-6 flex flex-rows justify-start items-center pl-4" onClick={chkTypePage}>
          <Image src={ImportIMG} alt="ImportIMG" />
          <span className="pl-2">Add New Project</span>
        </button>
        <button className="text-lg border-2 w-[187px] h-[37px] border-mainGreen bg-black text-mainGreen rounded-xl mt-6 flex flex-rows justify-start items-center pl-5">
          <Image src={ImportIMG2} alt="ImportIMG2" />
          <span className="pl-2"> Import Project</span>
        </button>
      </div>
    </div>
  );
}
