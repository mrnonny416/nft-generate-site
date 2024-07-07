import Header from "../components/header.component";

export default function HomePage() {

    return (
        <div
            className="flex flex-col w-full h-screen"
            style={{
                backgroundImage: "url(/image.png)",
                backgroundSize: "fit",
                backgroundPosition: "bottom",
                backgroundRepeat: "no-repeat"
            }}
        >
            <Header />
            <div className="flex flex-col w-full px-3 h-screen bg-gradient-to-b from-black from-80% to-black-1/6  gap-10 max-w-[400px]">
                <div className="text-[67px]">CREATE YOUR OWN NFT FROM OUR TOOLS</div>
                <div className="text-[26px]">สร้าง NFT ของคุณง่ายๆ ด้วยเครื่องมือของเรา ไม่กี่ขั้นตอน</div>
                <button className="px-[10px] py-[7px] text-[18px] w-fit border border-2 border-mainGreen bg-mainGreen text-black rounded-xl">
                    Get Started
                </button>
            </div>
        </div>
    );
}
