'use client';

import { motion, useCycle, useMotionValue, useTransform, animate } from "framer-motion";
import { Ref, useEffect, useState } from "react";

export default function MobileHomepageView({ blobRef }: { blobRef: Ref<HTMLDivElement> }) {
    const baseColors = ["#DB4242", "#00A86B", "#AFB530"]; // rosso, verde, giallo
    const [currentIndex, cycleIndex] = useCycle(0, 1, 2);

    const mouseX = useMotionValue(50);
    const mouseXPercent = useTransform(mouseX, (x) => `${x}%`);
    const baseColor = useMotionValue(baseColors[0]);

    // Effetto: cambio colore graduale ogni 10s
    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % baseColors.length;
            cycleIndex();
            animate(baseColor, baseColors[nextIndex], { duration: 1 }); // animazione fluida
        }, 10000);

        return () => clearInterval(interval);
    }, [currentIndex, cycleIndex, baseColor]);

    // Aggiorna il gradiente dinamicamente
    const dynamicGradient = useTransform<[string, string], string>(
        [baseColor, mouseXPercent],
        ([color, xPercent]) => {
            // @ts-ignore
            const x = parseFloat(xPercent);
            const left = Math.max(0, x - 20);
            const right = Math.min(100, x + 20);
            return `linear-gradient(90deg, ${color} ${left}%, #CAD7D8 ${x}%, #A586C4 ${right}%)`;
        }
    );

    // Traccia il movimento del mouse
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const xPercent = (e.clientX / window.innerWidth) * 100;
            mouseX.set(xPercent);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX]);

    const [isBlobVisible, setIsBlobVisible] = useState<boolean>(true);

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
                style={{ background: dynamicGradient }}
                transition={{ duration: 0.2, ease: "easeOut" }}
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
                <div className="z-10 relative flex justify-center items-center h-screen text-white text-4xl font-bold" />
            </div>
        </>
    );
}
