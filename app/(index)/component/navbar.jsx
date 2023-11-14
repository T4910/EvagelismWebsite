'use client'
import { useState, useEffect } from 'react';
import Image from "next/image"
import Link from "next/link"


const navbar = () => {
  const [navbarBg, setNavbarBg] = useState('bg-transparent');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 100) {
        setNavbarBg('bg-white');
      } else {
        setNavbarBg('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`pr-2 md:pl-4 py-2 md:pr-8 flex w-full justify-between text-white fixed ${navbarBg} transition-all duration-300 ease-in-out z-20`}>
        <Link href="/">
            <Image src="/images/LUEG LOGO.png" height={60} width={63}/>
        </Link>
        <div className="flex items-center gap-8 font-semibold">
            <button className="w-20 rounded-xl border-2 border-orange-500 text-orange-500 p-1 px-2">Donate</button>
            <button className="w-20 rounded-xl border-2 border-orange-500 bg-orange-500 p-1 px-2">Join</button>
        </div>
    </div>
  )
}

export default navbar