'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Great_Vibes } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';
import { IconButton } from '@mui/material';
import {
  PersonOutline,
  ShoppingBagOutlined,
  Menu as MenuIcon,
  Close as CloseIcon
} from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { toggleBag, selectBagIsOpen, selectBagTotalItems } from '@/lib/redux/features/BagSlice/BagSlice';
import Bag from '../Bag/Bag';

const scriptFont = Great_Vibes({ weight: '400', subsets: ['latin'], display: 'swap' });

// === DEFINING THE MENU LINKS HERE ===
export const MENU_ITEMS = [
  { label: 'Categories', href: '/categories' },
  { label: 'Shop', href: '/shop' },
  { label: 'Special Discounted Articles', href: '/special-discounts' },
  { label: 'Size Chart', href: '/size-chart' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Terms & Conditions', href: '/terms' },
];

export default function Navbar() {
  const dispatch = useAppDispatch();
  const isBagOpen = useAppSelector(selectBagIsOpen);
  const bagItemCount = useAppSelector(selectBagTotalItems);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleBag = () => dispatch(toggleBag());

  return (
    <>
      {/* Standard Navbar */}
      <nav className="fixed top-0 left-0 w-full h-20 bg-white border-b border-gray-100 shadow-sm z-[999] px-4 md:px-8 flex justify-between items-center">

        {/* === LEFT SECTION === */}
        <div className="flex items-center">
          {/* Mobile: Hamburger Icon (Hidden on Desktop) */}
          <div className="lg:hidden">
            <IconButton onClick={() => setIsMobileMenuOpen(true)} edge="start">
              <MenuIcon style={{ color: '#1a1a1a' }} />
            </IconButton>
          </div>

          {/* Desktop: Logo & Quote (Hidden on Mobile) */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/" className={`${scriptFont.className} text-4xl text-transparent bg-clip-text bg-gradient-to-b from-[#C5A080] to-[#5e4b35] pb-1`}>
              Musk
            </Link>

            {/* Divider */}
            <div className="h-4 w-[1px] bg-gray-300 rounded-full" />

            {/* Quote */}
            <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-medium pt-1">
              The projection of your soul
            </span>
          </div>
        </div>

        {/* === CENTER SECTION (Mobile Only) === */}
        <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className={`${scriptFont.className} text-4xl text-transparent bg-clip-text bg-gradient-to-b from-[#C5A080] to-[#5e4b35] pb-1`}>
            Musk
          </Link>
        </div>

        {/* === RIGHT SECTION === */}
        <div className="flex items-center gap-6">

          {/* Desktop: Navigation Links (Hidden on Mobile) */}
          <div className="hidden lg:flex items-center">
            {MENU_ITEMS.map((item, idx) => (
              <div key={idx} className="flex items-center">
                <Link
                  href={item.href}
                  className="text-[10px] font-medium uppercase tracking-wider hover:text-[#C5A080] transition-colors"
                >
                  {item.label}
                </Link>

                {/* Vertical Bar Separator (Rendered only if NOT the last item) */}
                {idx < MENU_ITEMS.length - 1 && (
                  <span className="mx-3 h-3 w-[1px] bg-gray-300" />
                )}
              </div>
            ))}
          </div>

          {/* Icons (Visible on all screens) */}
          <div className="flex items-center gap-1 pl-2">
            <Link href="/account">
              <IconButton><PersonOutline style={{ color: '#1a1a1a' }} /></IconButton>
            </Link>
            <IconButton onClick={handleToggleBag}>
              <div className="relative">
                <ShoppingBagOutlined style={{ color: '#1a1a1a' }} />
                {bagItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-[#C5A080] text-[8px] text-white font-bold">
                    {bagItemCount}
                  </span>
                )}
              </div>
            </IconButton>
          </div>
        </div>
      </nav>

      {/* === MOBILE MENU OVERLAY === */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 bg-[#f4f4f4] z-[1000] flex flex-col"
          >
            <div className="flex justify-between items-center p-5 border-b border-gray-200">
              <span className={`${scriptFont.className} text-3xl text-transparent bg-clip-text bg-gradient-to-b from-[#C5A080] to-[#5e4b35]`}>
                Musk
              </span>
              <IconButton onClick={() => setIsMobileMenuOpen(false)}>
                <CloseIcon />
              </IconButton>
            </div>

            <div className="flex flex-col p-8 gap-6 overflow-y-auto">
              {MENU_ITEMS.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-serif text-[#1a1a1a] hover:text-[#960018]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isBagOpen && <Bag key="cart-drawer" />}
      </AnimatePresence>
    </>
  );
}