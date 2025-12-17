'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Great_Vibes } from 'next/font/google'; 
import { PersonOutline, ShoppingBagOutlined } from '@mui/icons-material';

// Redux & Hooks
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { toggleBag, selectBagIsOpen, selectBagTotalItems } from '@/lib/redux/features/BagSlice/BagSlice';
import Bag from '../Bag/Bag'; 
import Navbar, { MENU_ITEMS } from '../Navbar/Navbar'; 

const scriptFont = Great_Vibes({ weight: '400', subsets: ['latin'], display: 'swap' });

const HERO_IMAGES = [
    { 
      id: 1, 
      image: '/Home_Banners/1.jpg', 
      title: 'The Royal Crimson', 
      subtitle: 'Bridal Couture 2025', 
      description: 'Hand-embellished zardozi work on pure velvet. A tribute to the Mughal era crafted for the modern bride.' 
    },
    { 
      id: 2, 
      image: '/Home_Banners/2.jpg', 
      title: 'Ivory Heritage', 
      subtitle: 'Walima Edition', 
      description: 'Intricate silver dabka and pearl detailing on French net. Where tradition meets contemporary luxury.' 
    },
    { 
      id: 3, 
      image: '/Home_Banners/3.jpg', 
      title: 'Golden Hour', 
      subtitle: 'The Mehndi Series', 
      description: 'Vibrant raw silk with antique gotta work. Designed for the joyous celebration of love.' 
    },
    { 
      id: 4, 
      image: '/Home_Banners/4.jpg', 
      title: 'Ivory Heritage', 
      subtitle: 'Walima Edition', 
      description: 'Intricate silver dabka and pearl detailing on French net. Where tradition meets contemporary luxury.' 
    },
];

export default function HomeLanding() {
  const [index, setIndex] = useState(0);
  const dispatch = useAppDispatch();
  const isBagOpen = useAppSelector(selectBagIsOpen);
  const bagItemCount = useAppSelector(selectBagTotalItems);

  const current = HERO_IMAGES[index];

  const nextSlide = () => setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  const prevSlide = () => setIndex((prev) => (prev === 0 ? HERO_IMAGES.length - 1 : prev - 1));
  const handleToggleBag = () => dispatch(toggleBag());

  return (
    <>
      {/* =========================================================
          MOBILE VIEW (Kept exactly as requested)
         ========================================================= */}
      <div className="lg:hidden h-screen flex flex-col overflow-hidden">
        <Navbar />
        <section className="relative w-full h-full bg-white text-[#1a1a1a] pt-20 flex flex-col">
            <div className="relative flex-1 bg-[#e5e5e5] overflow-hidden group">
                 <AnimatePresence mode="wait">
                    <motion.img 
                        key={current.id}
                        src={current.image} 
                        alt={current.title}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-full h-full object-cover"
                    />
                 </AnimatePresence>
                 <div className="absolute bottom-0 right-0 flex bg-white border-t border-l border-[#1a1a1a] z-10">
                    <button onClick={prevSlide} className="w-12 h-12 flex items-center justify-center border-r border-[#1a1a1a] active:bg-gray-100 text-sm">&larr;</button>
                    <button onClick={nextSlide} className="w-12 h-12 flex items-center justify-center active:bg-gray-100 text-sm">&rarr;</button>
                 </div>
            </div>
            <div className="flex-shrink-0 px-6 py-6 flex flex-col justify-center bg-white z-20 shadow-[0_-5px_15px_rgba(0,0,0,0.02)]">
                 <div className="flex items-center gap-2 mb-2">
                    <span className="w-1 h-1 bg-[#960018] rounded-full"/>
                    <span className="font-mono text-[8px] uppercase text-gray-500 tracking-[0.2em]">{current.subtitle}</span>
                 </div>
                 <h1 className="text-3xl font-serif text-[#1a1a1a] leading-none mb-3">{current.title}</h1>
                 <p className="text-gray-600 text-[10px] leading-relaxed mb-5 font-light line-clamp-2">{current.description}</p>
                 <button className="w-full py-3 border border-[#1a1a1a] text-[9px] font-bold uppercase tracking-widest hover:bg-[#1a1a1a] hover:text-white transition-colors">
                    View Collection
                 </button>
            </div>
        </section>
      </div>


      {/* =========================================================
          DESKTOP VIEW (Left: Your Original Sidebar | Right: Clean Boutique)
         ========================================================= */}
      <section className="hidden lg:grid h-screen w-full bg-white text-[#1a1a1a] overflow-hidden grid-cols-12">
        
        {/* === LEFT SIDEBAR (Col 1-3) - KEPT UNCHANGED === */}
        <div className="col-span-3 border-r border-[#1a1a1a]/10 flex flex-col justify-between py-10 px-8 bg-white relative z-30">
           
           {/* Top: Logo */}
           <div className="flex flex-col items-start">
               <Link href="/" className={`${scriptFont.className} text-5xl leading-none mb-2 text-transparent bg-clip-text bg-gradient-to-b from-[#C5A080] to-[#5e4b35] hover:opacity-80 transition-opacity`}>
                  Musk
               </Link>
               <span className="text-[7px] uppercase tracking-[0.3em] text-gray-400 font-medium">
                  The projection of your soul
               </span>
           </div>
           
           {/* Middle: Left-Aligned Menu List */}
           <nav className="flex flex-col gap-5 items-start w-full">
               {MENU_ITEMS.map((item) => (
                   <Link 
                     key={item.label}
                     href={item.href}
                     className="group relative flex items-center gap-3"
                   >
                     {/* Bullet Point on Hover */}
                     <span className="w-0 h-[1px] bg-[#960018] transition-all duration-300 group-hover:w-4" />
                     
                     <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#1a1a1a] group-hover:text-[#960018] transition-colors">
                        {item.label}
                     </span>
                   </Link>
               ))}
           </nav>

           {/* Bottom: Footer Info */}
           <div className="flex flex-col gap-4">
              <div className="w-8 h-[1px] bg-gray-200" />
              <div className="flex gap-4 opacity-50">
                  <span className="text-[9px] uppercase tracking-widest">Instagram</span>
                  <span className="text-[9px] uppercase tracking-widest">Facebook</span>
              </div>
           </div>
        </div>


        {/* === RIGHT CANVAS (Col 4-12) - CLEAN BOUTIQUE STYLE === */}
        <div className="col-span-9 relative bg-[#f4f4f4] h-full overflow-hidden group">
            
            {/* 1. Utility Icons (Floating Top Right - Kept for consistency) */}
            <div className="absolute top-0 right-0 p-8 z-40 flex gap-4">
                <Link href="/account" className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <PersonOutline style={{ fontSize: 18 }} />
                </Link>
                <button onClick={handleToggleBag} className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors relative">
                    <ShoppingBagOutlined style={{ fontSize: 18 }} />
                    {bagItemCount > 0 && (
                        <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-[#960018] rounded-full border border-white" />
                    )}
                </button>
            </div>

            {/* 2. Main Image (Full Size) */}
            <AnimatePresence mode="wait">
                <motion.div 
                    key={current.id}
                    className="absolute inset-0 z-0"
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.4, ease: "circOut" }}
                >
                    <img src={current.image} alt={current.title} className="w-full h-full object-cover" />
                    {/* Subtle gradient for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 pointer-events-none" />
                </motion.div>
            </AnimatePresence>
            
            {/* 3. Floating Title (Top Right Overlay) */}
            <div className="absolute top-24 right-12 z-20 text-right max-w-2xl pointer-events-none">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current.id}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                         <h1 className="text-6xl xl:text-8xl font-serif text-white drop-shadow-lg mix-blend-overlay opacity-90 leading-none mb-2">
                            {current.title}
                         </h1>
                         <p className="text-white/80 text-sm uppercase tracking-widest font-light mr-1">
                            {current.subtitle}
                         </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* 4. The Boutique Block (Bottom Left Thumbnail Nav) */}
            <div className="absolute bottom-0 left-0 bg-white p-6 pt-8 pr-12 rounded-tr-[40px] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-30 flex flex-col gap-3">
                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 pl-1">Select Look</span>
                
                <div className="flex items-center gap-4">
                    {HERO_IMAGES.map((img, idx) => (
                        <button 
                            key={img.id}
                            onClick={() => setIndex(idx)}
                            className={`
                                relative overflow-hidden transition-all duration-500 ease-out group
                                ${index === idx ? 'w-20 h-24 shadow-lg' : 'w-14 h-16 opacity-50 grayscale hover:opacity-100 hover:grayscale-0'}
                            `}
                        >
                            <img src={img.image} className="w-full h-full object-cover" alt="" />
                            
                            {/* Active Indicator Border */}
                            {index === idx && (
                                <div className="absolute inset-0 ring-2 ring-inset ring-[#960018]" />
                            )}

                            {/* Number Tag */}
                            <span className={`absolute bottom-0 left-0 bg-white px-1.5 py-0.5 text-[7px] font-bold text-[#1a1a1a] ${index === idx ? 'opacity-100' : 'opacity-0'}`}>
                                0{idx + 1}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

        </div>
      </section>

      {isBagOpen && <Bag />}
    </>
  );
}