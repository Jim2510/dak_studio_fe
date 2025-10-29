'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import LayoutHomepage from '@/app/homepage/LayoutHomepage';
import './homepage/homapage.css';
import {useMedia} from "use-media";
import MobileHomepageView from "@/components/MobileHomepageView";
import RegularHomepageView from "@/components/RegularHomepageView";

const greenVariants = ['#DB4242', '#00A86B', '#AFB530'];

export default function HomePage() {
  const blobRef = useRef<HTMLDivElement>(null);
  const [currentColor, setCurrentColor] = useState<string>('');

  const isMobile = useMedia({ maxWidth: '768px' });

  const getRandomColor = useCallback((exclude: string): string => {
    const filtered = greenVariants.filter(c => c !== exclude);
    return filtered[Math.floor(Math.random() * filtered.length)];
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const applyBlobColor = useCallback((_: string) => {
    if (blobRef.current) {
      blobRef.current.style.transition = 'background 1.2s ease';
      blobRef.current.style.background = `radial-gradient(circle at center, #A586C4, #CAD7D8)`;
    }
  }, []);

  useEffect(() => {
    const randomColor = getRandomColor('');
    setCurrentColor(randomColor);
    applyBlobColor(randomColor);

    const handleMouseMove = (e: MouseEvent) => {
      if (blobRef.current) {
        const x = e.clientX - 450;
        const y = e.clientY - 450;
        blobRef.current.animate(
            { transform: `translate(${x}px, ${y}px)` },
            { duration: 300, fill: 'forwards', easing: 'ease-out' }
        );
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [applyBlobColor, getRandomColor]);

  const changeColor = () => {
    const newColor = getRandomColor(currentColor);
    setCurrentColor(newColor);
    applyBlobColor(newColor);
  };

  return (
      <LayoutHomepage onLogoClick={changeColor}>
        {!isMobile ?
            (<MobileHomepageView blobRef={blobRef} />) : (<RegularHomepageView/>) }
      </LayoutHomepage>
  );
}