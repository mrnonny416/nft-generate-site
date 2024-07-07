'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image";
import Hamburger from '../../public/hamburger.svg'
import Link from 'next/link';

const Header = (props: any) => {
    const { headerName } = props
    console.log(props);

    const main1 = "flex flex-row justify-between text-mainGreen px-3 bg-black pt-10 pb-[15px] z-[100]";

    const [signIn, setSignIn] = useState<boolean>()
    const [menuHamburger, setMenuHamburger] = useState<boolean>(false)
    const menuRef = useRef<HTMLDivElement>(null);

    const onSignIn = (status: boolean) => {
        setSignIn(status)
    }

    const onSetMenuHamburger = () => {
        setMenuHamburger(!menuHamburger)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuHamburger(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    return (
        <div className={`${main1}`}>
            <Link href={'/'} className="flex text-[34px]">NFT</Link>
            <div className="flex text-[18px] justify-center items-center">{headerName}</div>
            {!signIn && (
                <button className="flex border-2 border-mainGreen px-[10px] py-[7px] text-[18px] rounded-xl items-center h-fit" onClick={() => onSignIn(true)}>
                    Connect
                </button>
            )}
            {signIn && (
                <div className='relative' ref={menuRef}>
                    <button className="flex border-2 border-mainGreen px-[10px] py-[7px] text-[18px] rounded-md items-center" onClick={onSetMenuHamburger}>
                        <Image src={Hamburger} alt='Hamburger' />
                    </button>
                    {menuHamburger && (
                        <div className='w-[120px] h-fit absolute right-0 mt-1 border-2 border-mainGreen rounded-md p-3 bg-black'>
                            <Link href={'/'} onClick={() => { setMenuHamburger(false) }} className='w-full flex text-center justify-center'>Home</Link>
                            <hr className='my-2 border-mainGreen' />
                            <Link href={'/dashboard'} onClick={() => { setMenuHamburger(false) }} className='w-full flex text-center justify-center'>Dashboard</Link>
                            <hr className='my-2 border-mainGreen' />
                            <Link href={'/market'} onClick={() => { setMenuHamburger(false) }} className='w-full flex text-center justify-center'>Market</Link>
                            <hr className='my-2 border-mainGreen' />
                            <Link href={'/mint'} onClick={() => { setMenuHamburger(false) }} className='w-full flex text-center justify-center'>Mint</Link>
                            <hr className='my-2 border-mainGreen' />
                            <button className='w-full' onClick={() => { onSignIn(false); setMenuHamburger(false) }}>Logout</button>
                        </div>
                    )}
                </div>
            )}
        </div >
    )
}

export default Header