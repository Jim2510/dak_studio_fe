'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import logo from '../../../public/DAK_logo_grey.svg';
import { useEffect, useState } from 'react';

export default function Initial() {
    const [hideScreen, setHideScreen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHideScreen(true);
        }, 2800);
        return () => clearTimeout(timer);
    }, []);

    if (hideScreen) return null;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 2.5, duration: 0.3 }}
            className="fixed inset-0 z-[100] overflow-hidden"
        >
            <motion.div
                initial={{ backgroundColor: 'transparent', y: 0 }}
                animate={{ backgroundColor: '#1C1812', y: '-100%' }}
                transition={{ delay: 0.6, duration: 1.8, ease: 'easeInOut' }}
                className="absolute inset-0 z-0"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 0 }}
                animate={{
                    opacity: [0, 1, 1],
                    scale: [0.8, 1, 1],
                    x: [0, 0, -300],
                }}
                transition={{
                    duration: 2.2,
                    times: [0, 0.3, 1],
                    ease: 'easeInOut',
                }}
                className="absolute top-1/2 left-1/2 z-[110] -translate-x-1/2 -translate-y-1/2"
            >
                <Image src={logo} alt="logo" width={300} height={300} priority />
            </motion.div>
        </motion.div>
    );
}
