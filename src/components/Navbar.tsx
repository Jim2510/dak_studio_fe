'use client'

import logo from "../../public/dak_logo_extd_grey_web.svg"
import Image from "next/image";
import {Roboto_Mono} from "next/font/google";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import {useMedia} from "use-media";

const roboto = Roboto_Mono({
    subsets: ['latin'],
    preload: true,
});
const contact_one = ['SOUND DESIGN', 'AUDIO PRODUCTION', 'MIX & MASTERING', 'RECORDING', 'DJING'];
const contact_two = ['HELLO@DAKSTUDIO.COM', '@_DAKSTUDIO'];

export default function Navbar({ onLogoClick }: { onLogoClick: () => void }) {
    const [startAnimation, setStartAnimation] = useState(false);

    const isMobile = useMedia({ maxWidth: '768px' });


    useEffect(() => {
        const timer = setTimeout(() => {
            setStartAnimation(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div
            initial={{ height: '100vh' }}
            animate={{ height: isMobile ? '100px' : '150px' }}
            transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.4 }}
            className={`w-full bg-[#1C1812] flex justify-between md:px-12 px-2 items-center fixed top-0 z-50 overflow-hidden ${roboto.className}`}
        >
            {/* Logo animato */}
            <motion.div
                initial={{ scale: 2, top: '50%', left: '50%', x: isMobile ? '50%' : '-30%', y: '-50%', position: 'absolute' }}
                animate={{
                    scale: 1,
                    top: 0,
                    left: 0,
                    x: '2rem',
                    y: '-20%',
                    position: 'absolute'
                }}
                transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.4 }}
                className="z-50"
            >
                <Link href='/homepage' className='cursor-pointer' onClick={(e) => {
                    e.preventDefault();
                    onLogoClick();
                }}>
                    <Image src={logo} alt="Logo" width={250} height={230} className='md:w-[250px] md:h-[230px] w-[180px] h-[150px] -ml-5 md:m-0' />
                </Link>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: startAnimation ? 1 : 0 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="hidden md:grid grid-cols-2 w-fit h-fit text-[#CAD7D8] md:text-base text-xs gap-2 md:gap-18 ml-auto"
            >
                <h1 className="hidden">STUDIO, AUDIO, SOUND DESIGN, MILANO, MIX, MASTER, MASTERING, MIXING, PRODUCTION, REC, RECORDING</h1>
                <div className='flex flex-col justify-start items-start w-[50%] text-nowrap'>
                    {contact_one.map((contact, i) => <p key={i}>{contact}</p>)}
                </div>
                <div className='flex flex-col justify-start items-start w-[50%]'>
                    {contact_two.map((contact, i) => <Link href='' className='hover:tracking-widest hover:font-bold transition-all ease-in-out ' key={i}>{contact}</Link>)}
                </div>
            </motion.div>
        </motion.div>
    );
}
