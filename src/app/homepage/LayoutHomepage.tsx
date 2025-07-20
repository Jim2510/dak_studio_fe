'use client'

import Navbar from "@/components/Navbar";
import {ReactNode} from "react";
import Footer from "@/components/Footer";

export default function LayoutHomepage({children, onLogoClick}: {children: ReactNode, onLogoClick: () => void}) {
    return (
        <>
            <div className='relative overflow-hidden z-0 bg-[A586C4]'>
                <Navbar onLogoClick={onLogoClick} />
                {children}
                <Footer />
            </div>
        </>
    )
}