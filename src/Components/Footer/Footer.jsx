'use client';

import Link from 'next/link';
import { Great_Vibes } from 'next/font/google';
import { Instagram, Facebook, Pinterest } from '@mui/icons-material';

const scriptFont = Great_Vibes({ weight: '400', subsets: ['latin'], display: 'swap' });

export default function Footer() {
  return (
    <footer className="bg-white text-[#1a1a1a] relative border-t border-gray-100">
      
      {/* Upper Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-100 border-b border-gray-100">
        
        {/* Col 1: Newsletter */}
        <div className="p-10 lg:p-16 flex flex-col justify-between h-full">
            <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] block mb-4">Newsletter</span>
                <h3 className="text-2xl font-serif mb-6">Unlock the world of Musk</h3>
                <div className="flex border-b border-black pb-2">
                    <input type="email" placeholder="E-mail" className="w-full outline-none text-sm placeholder-gray-400" />
                    <button className="text-[10px] uppercase font-bold tracking-widest">Subscribe</button>
                </div>
            </div>
        </div>

        {/* Col 2: Shop */}
        <div className="p-10 lg:p-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] block mb-8 text-gray-400">Shop</span>
            <ul className="space-y-4">
                {['New Arrivals', 'Bridal', 'Formals', 'Unstitched', 'Sale'].map((item) => (
                     <li key={item}><Link href="#" className="text-xs uppercase tracking-widest hover:text-[#960018] transition-colors">{item}</Link></li>
                ))}
            </ul>
        </div>

        {/* Col 3: Information */}
        <div className="p-10 lg:p-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] block mb-8 text-gray-400">Information</span>
             <ul className="space-y-4">
                {['About Us', 'Contact', 'Store Locator', 'Privacy Policy'].map((item) => (
                     <li key={item}><Link href="#" className="text-xs uppercase tracking-widest hover:text-[#960018] transition-colors">{item}</Link></li>
                ))}
            </ul>
        </div>

        {/* Col 4: Socials */}
        <div className="p-10 lg:p-16 flex flex-col justify-between">
             <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] block mb-8 text-gray-400">Social</span>
                <div className="flex gap-4">
                    <Instagram className="cursor-pointer hover:text-[#960018] transition-colors" />
                    <Facebook className="cursor-pointer hover:text-[#960018] transition-colors" />
                    <Pinterest className="cursor-pointer hover:text-[#960018] transition-colors" />
                </div>
             </div>
             <p className="text-[9px] text-gray-400 mt-12">© 2025 Musk.</p>
        </div>
      </div>
    </footer>
  );
}