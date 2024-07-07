'use client'

import React, { useState } from 'react'
import Image from "next/image";
import Hamburger from '../../public/hamburger.svg'

const Header = (props: any) => {
    const { headerName } = props
    console.log(props);

    const main1 = "flex flex-row justify-between text-mainGreen px-3 bg-black pt-10 pb-[15px]";

    const [signIn, setSignIn] = useState<boolean>()

    const onSignIn = () => {
        setSignIn(true)
    }

    return (
        <div className={`${main1}`}>
            <div className="flex text-[34px]">NFT</div>
            <div className="flex text-[18px] justify-center items-center">{headerName}</div>
            {!signIn && (
                <button className="flex border-2 border-mainGreen px-[10px] py-[7px] text-[18px] rounded-xl items-center" onClick={onSignIn}>
                    Connect
                </button>
            )}
            {signIn && (
                <button className="flex border-2 border-mainGreen px-[10px] py-[7px] text-[18px] rounded-xl items-center" >
                    <Image src={Hamburger} alt='Hamburger' />
                </button>
            )}
        </div>
    )
}

export default Header