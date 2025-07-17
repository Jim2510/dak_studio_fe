'use client'

import {motion, useCycle} from "framer-motion";
import {Ref, useEffect, useState} from "react";

export default function MobileHomepageView({ blobRef}: { blobRef: Ref<HTMLDivElement>}) {
    const [isBlobVisible, setIsBlobVisible] = useState(true);

    const gradients = [
        "linear-gradient(90deg, #DB4242, #CAD7D8, #A586C4)",
        "linear-gradient(90deg, #00A86B, #CAD7D8, #A586C4)",
        "linear-gradient(90deg, #AFB530, #CAD7D8, #A586C4)",
    ];

    const [currentGradient, cycleGradient] = useCycle(...gradients);

    useEffect(() => {
        const interval = setInterval(() => {
            cycleGradient();
        }, 10000);
        return () => clearInterval(interval);
    }, [cycleGradient]);

    useEffect(() => {
        const handleMouseLeave = () => setIsBlobVisible(false);
        const handleMouseEnter = () => setIsBlobVisible(true);

        window.addEventListener("mouseleave", handleMouseLeave);
        window.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, []);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-full h-full -z-10"
                animate={{background: currentGradient}}
                transition={{duration: 5, ease: "easeInOut"}}
            />
            <div className="relative w-full min-h-screen overflow-hidden">
                <div
                    className="blob"
                    ref={blobRef}
                    style={{
                        opacity: isBlobVisible ? 1 : 0,
                        transition: "opacity 0.4s ease-in-out",
                    }}
                />
                <div className="z-10 relative flex justify-center items-center h-screen text-white text-4xl font-bold"/>
            </div>
        </>
    );
}
