"use client";

import React, { useState } from "react";
import Header from "../components/header.component";
import Image from "next/image";
import Nft01 from "../../public/nft-01.svg";
import twitterB from "../../public/twitter-black.svg";
import discordB from "../../public/discord-black.svg";
import sendB from "../../public/send-black.svg";

const Mint = () => {
    const [showMintState, setShowMintState] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);

    const data = [
        { id: 1, name: "p1", img: Nft01 },
        { id: 2, name: "p2", img: Nft01 }
    ];

    const onPlus = () => {
        setCount((prev) => prev + 1);
    };

    const onMinus = () => {
        if (count <= 0) return;
        setCount((prev) => prev - 1);
    };

    return (
        <div>
            <Header headerName="Project" />
            <div className="grid grid-cols-2 m-auto w-fit gap-6 pt-6 pb-4 px-4">
                {data &&
                    data.map((x) => (
                        <div key={x.id} className="flex justify-center">
                            <Image src={x.img} alt={x.name} width={500} height={500} />
                        </div>
                    ))}
            </div>
            <div className="flex bg-mainGreen w-fit p-3 gap-4 rounded m-auto">
                <Image src={twitterB} alt="twitterB" />

                <Image src={discordB} alt="discordB" />

                <Image src={sendB} alt="sendB" />
            </div>
            <p className="pt-4 text-[12px] text-center m-auto px-4">
                Text RoremText RoremText RoremText RoremText RoremText RoremText RoremText RoremText RoremText RoremText
                RoremText Rorem
            </p>
            {showMintState && (
                <div className="h-fit w-fit m-auto flex justify-center items-center">
                    <div className="border border-mainGreen rounded-md w-full h-fit py-2 px-10 mt-10">
                        <p className="text-center text-mainGreen"> 20 12:09:11 hr</p>
                        <p className="text-center text-mainGreen">to</p>
                        <p className="text-center text-mainGreen">Mint</p>
                    </div>
                </div>
            )}
            {!showMintState && (
                <div className="h-fit w-fit m-auto flex justify-center items-center">
                    <div className="border border-mainGreen rounded-md h-fit p-4 grid gap-y-4    mt-10">
                        <div className="flex gap-x-10">
                            <button
                                className="flex bg-mainGreen w-[40px] h-[40px] p-3 gap-4 rounded m-auto text-black justify-center items-center"
                                onClick={onMinus}
                            >
                                {" "}
                                -{" "}
                            </button>
                            <div className="flex bg-mainGreen w-[40px] h-[40px] p-3 gap-4 rounded m-auto text-black justify-center items-center">
                                {" "}
                                {count}{" "}
                            </div>
                            <button
                                className="flex bg-mainGreen w-[40px] h-[40px] p-3 gap-4 rounded m-auto text-black justify-center items-center"
                                onClick={onPlus}
                            >
                                {" "}
                                +{" "}
                            </button>
                        </div>
                        <div>
                            <button
                                className="flex bg-mainGreen w-[40px] h-[40px] p-3 gap-4 rounded m-auto text-black justify-center items-center"
                                onClick={() => setShowMintState(true)}
                            >
                                {" "}
                                Mint{" "}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Mint;
