import {animate, motion, useCycle, useMotionValue, useTransform} from 'framer-motion';
import {useEffect} from "react";

export default function RegularHomepageView() {
    const baseColors = ["#DB4242", "#00A86B", "#AFB530"];
    const mouseX = useMotionValue(50);
    const [currentIndex, cycleIndex] = useCycle(0, 1, 2);
    const mouseXPercent = useTransform(mouseX, (x) => `${x}%`);
    const baseColor = useMotionValue(baseColors[0]);
    const dynamicGradientOne = useTransform<[string, string], string>(
        [baseColor, mouseXPercent],
        ([color]) => {
            return `linear-gradient(0deg, ${color} 0%, #CAD7D8 15%, #A586C4 40%)`;
        }
    );
    const dynamicGradientTwo = useTransform<[string, string], string>(
        [baseColor, mouseXPercent],
        ([color, ]) => {
            return `linear-gradient(180deg, ${color} 0%, #CAD7D8 15%, #A586C4 40%)`;
        }
    );

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % baseColors.length;
            cycleIndex();
            animate(baseColor, baseColors[nextIndex], { duration: 1 });
        }, 7000);

        return () => clearInterval(interval);
    }, [currentIndex, cycleIndex, baseColor]);

    return (
        <>
        <div className='w-full bg-transparent flex flex-col justify-start items-center mt-18'>
            <motion.div style={{background: dynamicGradientOne}} transition={{duration: 0.2, ease: "easeOut"}}
                        className='min-h-[250px] w-full'></motion.div>
            <motion.div initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}}
                            transition={{duration: 1, delay: 0.3}}
                            className="row-span-2 bg-[#26211C]  w-full px-4 py-10 flex justify-between leading-3 text-[#CAD7D8]">
                    <div className="space-y-2">
                        <p>SOUND DESIGN</p>
                        <p>AUDIO PRODUCTION</p>
                        <p>MIX & MASTERING</p>
                        <p>RECORDING</p>
                        <p>DJING</p>
                    </div>
                    <div className="text-right space-y-2">
                        <p>HELLO@DAKSTUDIO.IT</p>
                        <p>@_DAKSTUDIO</p>
                    </div>
                </motion.div>
            <motion.div style={{ background: dynamicGradientTwo }} transition={{ duration: 0.2, ease: "easeOut" }} className='min-h-[350px] w-full'>
        </motion.div>

        </div>
</>
    // <motion.div style={{ background: dynamicGradient }}
    //             transition={{ duration: 0.2, ease: "easeOut" }} className="min-h-[100vh] max-h-screen bg-[linear-gradient(to_top,_#A586C4_0%,_#A586C4_30%,_#CAD7D8_50%,_#00A86B_100%)] flex flex-col justify-center items-center text-white font-mono">
    //     <motion.div initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}}
    //                 transition={{duration: 1, delay: 0.3}}
    //                 className="row-span-2 bg-[#26211C]  w-full px-4 py-10 flex justify-between leading-3 text-[#CAD7D8]">
    //         <div className="space-y-2">
    //             <p>SOUND DESIGN</p>
    //             <p>AUDIO PRODUCTION</p>
    //             <p>MIX & MASTERING</p>
        //             <p>RECORDING</p>
        //             <p>DJING</p>
        //         </div>
        //         <div className="text-right space-y-2">
        //             <p>HELLO@DAKSTUDIO.IT</p>
        //             <p>@_DAKSTUDIO</p>
        //         </div>
        //     </motion.div>
        // </motion.div>
    );
}
