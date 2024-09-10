"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Hamburger from "../../public/hamburger.svg";
import Link from "next/link";
import { ethers } from "ethers";

declare global {
    interface Window {
        ethereum: any;
    }
}

const Header = (props: any) => {
    const { headerName } = props;
    console.log(props);

    const main1 = "flex flex-row justify-between text-mainGreen px-3 bg-white pt-10 pb-[15px] z-[100] sticky top-0";

    const [signIn, setSignIn] = useState<boolean>(false);
    const [menuHamburger, setMenuHamburger] = useState<boolean>(false);
    const [account, setAccount] = useState<string | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    // ฟังก์ชันสำหรับการย่อ address
    const shortenAddress = (address: string) => {
        return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
    };

    const onSignIn = async (status: boolean) => {
        if (status) {
            if (window.ethereum) {
                try {
                    const provider = new ethers.BrowserProvider(window.ethereum);
                    await provider.send("eth_requestAccounts", []);
                    const signer = provider.getSigner();
                    const address = await (await signer).getAddress();
                    setAccount(address);
                    setSignIn(true);
                    localStorage.setItem("isConnected", "true"); // เก็บสถานะการเชื่อมต่อใน localStorage
                } catch (error) {
                    console.log("Connection error: ", error);
                }
            } else {
                alert("MetaMask is not installed");
            }
        } else {
            setSignIn(false);
            setAccount(null);
            localStorage.removeItem("isConnected");
        }
    };

    const onSetMenuHamburger = () => {
        setMenuHamburger(!menuHamburger);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuHamburger(false);
            }
        };

        const connectionStatus = localStorage.getItem("isConnected");
        if (connectionStatus === "true") {
            setSignIn(true);
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    return (
        <div className={`${main1}`}>
            <Link href={"/"} className="flex text-[34px]">
                NFT
            </Link>
            <div className="absolute left-1/2 transform -translate-x-1/2 text-[18px]">{headerName}</div>
            {!signIn && (
                <button
                    className="flex border-2 border-mainGreen px-[10px] py-[7px] text-[18px] rounded-xl items-center h-fit"
                    onClick={() => onSignIn(true)}
                >
                    Connect
                </button>
            )}
            {signIn && (
                <div className="relative" ref={menuRef}>
                    <button
                        className="flex border-2 border-mainGreen px-[10px] py-[7px] text-[18px] rounded-md items-center"
                        onClick={onSetMenuHamburger}
                    >
                        <Image src={Hamburger} alt="Hamburger" />
                    </button>
                    {menuHamburger && (
                        <div className="w-[120px] h-fit absolute right-0 mt-1 border-2 border-mainGreen rounded-md p-3 bg-white shadow-md">
                            <Link
                                href={"/"}
                                onClick={() => {
                                    setMenuHamburger(false);
                                }}
                                className="w-full flex text-center justify-center"
                            >
                                Home
                            </Link>
                            <hr className="my-2 border-mainGreen" />
                            <Link
                                href={"/projects/create"}
                                onClick={() => {
                                    setMenuHamburger(false);
                                }}
                                className="w-full flex text-center justify-center"
                            >
                                New Project
                            </Link>
                            <hr className="my-2 border-mainGreen" />
                            <Link
                                href={"/dashboard"}
                                onClick={() => {
                                    setMenuHamburger(false);
                                }}
                                className="w-full flex text-center justify_center"
                            >
                                Dashboard
                            </Link>
                            <hr className="my-2 border-mainGreen" />
                            <Link
                                href={"/market"}
                                onClick={() => {
                                    setMenuHamburger(false);
                                }}
                                className="w-full flex text-center justify-center"
                            >
                                Market
                            </Link>
                            <hr className="my-2 border-mainGreen" />
                            <Link
                                href={"/mint"}
                                onClick={() => {
                                    setMenuHamburger(false);
                                }}
                                className="w-full flex text-center justify-center"
                            >
                                Mint
                            </Link>
                            <hr className="my-2 border-mainGreen" />
                            {/* แสดงที่อยู่กระเป๋าแบบย่อ */}
                            {account && <div>{shortenAddress(account)}</div>}
                            <button
                                className="w-full"
                                onClick={() => {
                                    onSignIn(false);
                                    setMenuHamburger(false);
                                }}
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Header;
