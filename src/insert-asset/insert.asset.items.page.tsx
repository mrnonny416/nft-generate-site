import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Header from "../components/header.component";
import { ProgressPage } from "../components/progressBar.component";
import Kapom from "../../public/Frame 4.svg";

export default function InsertAssetItemsPage() {
    const [showProgress, setShowProgress] = useState(false);

    const handleSubmit = () => {
        setShowProgress(true);
        setTimeout(() => {
            window.location.href = "../../dashboard?item=true";
        }, 5000);
    };

    if (showProgress) {
        return (
            <div className="flex flex-col w-full h-screen relative">
                <Header headerName="New/Assets" />
                <div className="flex flex-col justify-center items-center mt-[10px] w-full">
                    <ProgressPage />
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col w-full h-screen relative">
            <Header headerName="New/Assets" />
            <div className="flex flex-wrap gap-3 justify-center items-center mt-[10px] w-full">
                <div className="flex flex-wrap flex-col justify-center items-center bg-white border-mainGreen border-2 mt-[20px] w-[500px] rounded-lg">
                    <span className="pl-2 text-mainGreen w-[95%] mt-3">Select Top Layout [6/10]</span>
                    <div className="flex flex-col justify-center items-center bg-[#CDCDCD] w-[95%] h-[346px] rounded-lg m-3">
                        <div className="w-full h-full text-center text-20px grid grid-cols-3 grid-rows-2 gap-0 justify-items-center items-center">
                            <Image src={Kapom} alt="Kapom" className="w-[95%] h-[95%] object-cover rounded-lg" />
                            <Image src={Kapom} alt="Kapom" className="w-[95%] h-[95%] object-cover rounded-lg" />
                            <Image src={Kapom} alt="Kapom" className="w-[95%] h-[95%] object-cover rounded-lg" />
                            <Image src={Kapom} alt="Kapom" className="w-[95%] h-[95%] object-cover rounded-lg" />
                            <Image src={Kapom} alt="Kapom" className="w-[95%] h-[95%] object-cover rounded-lg" />
                            <Image src={Kapom} alt="Kapom" className="w-[95%] h-[95%] object-cover rounded-lg" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap flex-col justify-center items-center bg-white border-mainGreen border-2 mt-[20px] w-[500px] rounded-lg">
                    <span className="pl-2 text-mainGreen w-[95%] mt-3">Select Top Layout [6/10]</span>
                    <div className="flex flex-col justify-center items-center bg-[#CDCDCD] w-[95%] h-[346px] rounded-lg m-3">
                        <div className="w-full h-full text-center text-20px grid grid-cols-3 grid-rows-2 gap-0 justify-items-center items-center">
                            <Image src={Kapom} alt="Kapom" className="w-[95%] h-[95%] object-cover rounded-lg" />
                            <Image src={Kapom} alt="Kapom" className="w-[95%] h-[95%] object-cover rounded-lg" />
                            <Image src={Kapom} alt="Kapom" className="w-[95%] h-[95%] object-cover rounded-lg" />
                            <Image src={Kapom} alt="Kapom" className="w-[95%] h-[95%] object-cover rounded-lg" />
                            <Image src={Kapom} alt="Kapom" className="w-[95%] h-[95%] object-cover rounded-lg" />
                            <Image src={Kapom} alt="Kapom" className="w-[95%] h-[95%] object-cover rounded-lg" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap flex-col justify-center items-center bg-white border-mainGreen border-2 mt-[20px] w-[500px] rounded-lg">
                    <span className="pl-2 text-mainGreen w-[95%] mt-3">Select Top Layout [6/10]</span>
                    <div className="flex flex-col justify-center items-center bg-[#CDCDCD] w-[95%] h-[346px] rounded-lg m-3">
                        <div className="w-full h-full text-center text-20px grid grid-cols-3 grid-rows-2 gap-0 justify-items-center items-center">
                            <Image src={Kapom} alt="Kapom" className="w-[95%] h-[95%] object-cover rounded-lg" />
                            <Image src={Kapom} alt="Kapom" className="w-[95%] h-[95%] object-cover rounded-lg" />
                            <Image src={Kapom} alt="Kapom" className="w-[95%] h-[95%] object-cover rounded-lg" />
                            <Image src={Kapom} alt="Kapom" className="w-[95%] h-[95%] object-cover rounded-lg" />
                            <Image src={Kapom} alt="Kapom" className="w-[95%] h-[95%] object-cover rounded-lg" />
                            <Image src={Kapom} alt="Kapom" className="w-[95%] h-[95%] object-cover rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button
                    onClick={handleSubmit}
                    className="cursor-pointer bg-mainGreen text-black py-2 px-4 rounded-md text-center w-[480px] m-10"
                >
                    Submit
                </button>
            </div>
        </div>
    );
}
