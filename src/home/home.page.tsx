import Link from "next/link";
import Header from "../components/header.component";

export default function HomePage() {
    return (
        <div
            className="flex flex-col w-full h-screen relative "
            // style={{
            //     backgroundImage: "url(/bg.webp)",
            //     backgroundSize: "cover",
            //     backgroundPosition: "bottom",
            //     backgroundRepeat: "no-repeat"
            // }}
        >
            <Header />
            <div className="flex flex-col w-full h-screen b z-10 absolute bg-white" />

            <div className="flex flex-col w-full px-[28px] h-screen gap-10  relative z-10 pt-[28px] justify-center text-center">
                <div className="text-[67px] bg-gradient-to-r from-lime-300 to-green-300 bg-clip-text text-transparent">
                    CREATE YOUR OWN NFT FROM OUR TOOLS
                </div>
                <div className="text-[26px] bg-gradient-to-r from-lime-300 to-green-300 bg-clip-text text-transparent">
                    สร้าง NFT ของคุณง่ายๆ ด้วยเครื่องมือของเรา ไม่กี่ขั้นตอน
                </div>
                <Link href={"/dashboard"}>
                    <button className="px-[10px] py-[7px] text-[18px] w-fit  border-2 border-mainGreen bg-mainGreen text-white rounded-xl border-opacity-50">
                        Get Started
                    </button>
                </Link>
            </div>
        </div>
    );
}
