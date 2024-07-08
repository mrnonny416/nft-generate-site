import Link from "next/link";
import Header from "../components/header.component";

export default function HomePage() {
    return (
        <div
            className="flex flex-col w-full h-screen relative "
            style={{
                backgroundImage: "url(/bg.webp)",
                backgroundSize: "cover",
                backgroundPosition: "bottom",
                backgroundRepeat: "no-repeat"
            }}
        >
            <Header />
            <div className="flex flex-col w-full h-screen b z-10 absolute bg-gradient-to-b from-black from-30% via-black/70 via-60%" />

            <div className="flex flex-col w-full px-[28px] h-screen gap-10 max-w-[400px] relative z-10 pt-[28px]">
                <div className="text-[67px]">CREATE YOUR OWN NFT FROM OUR TOOLS</div>
                <div className="text-[26px]">สร้าง NFT ของคุณง่ายๆ ด้วยเครื่องมือของเรา ไม่กี่ขั้นตอน</div>
                <Link href={"/dashboard"}>
                    <button className="px-[10px] py-[7px] text-[18px] w-fit  border-2 border-mainGreen bg-mainGreen text-black rounded-xl border-opacity-50">
                        Get Started
                    </button>
                </Link>
            </div>
        </div>
    );
}
