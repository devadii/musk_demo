'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Added for Footer
import { motion, AnimatePresence } from 'framer-motion';
import { Great_Vibes } from 'next/font/google';
import { 
  Straighten, 
  LocalShippingOutlined,
  FavoriteBorder,
  KeyboardArrowDown,
  Instagram, // Added for Footer
  Facebook,
  Pinterest
} from '@mui/icons-material';
import Navbar from '@/Components/Navbar/Navbar';
import Footer from '@/Components/Footer/Footer';

// Dummies
const useAppDispatch = () => () => {};
const addProduct = (data) => console.log('Added:', data);
const scriptFont = Great_Vibes({ weight: '400', subsets: ['latin'], display: 'swap' });

const PRODUCT = {
  id: 101,
  title: 'The Gul-e-Daudi Bridal',
  price: 450000,
  sku: 'MUSK-BRIDAL-25-01',
  description: 'A masterpiece of heritage craftsmanship. The Gul-e-Daudi set features a pure raw silk lehnga in deep crimson, hand-embellished with antique zardozi, dabka, and nakshi work. Paired with a heavily embroidered choli and a mukesh-work net dupatta.',
  details: ['Pure Raw Silk (80g)', 'Hand-embellished Zardozi', 'Includes: Lehnga, Choli, Dupatta', 'Making Time: 8-10 Weeks'],
  shipping: 'Worldwide shipping available. Free within Pakistan.',
  images: [
    '/Gallery/1/DFB-01_1.jpg',
    '/Gallery/1/DFB-01_2.jpg',
    '/Gallery/1/DFB-01_4.jpg',
    '/Gallery/1/DFB-01_7.jpg',
    '/Gallery/1/DFB-01_3.jpg',
  ],
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom'],
};

const formatPrice = (price) => new Intl.NumberFormat('en-PK', { style: 'currency', currency: 'PKR', maximumFractionDigits: 0 }).format(price);


// =====================================================================
// LEFT SIDE: GALLERY (Now Natural Height)
// =====================================================================
const GallerySection = ({ images }) => {
  return (
    <div className="col-span-12 lg:col-span-7 bg-[#F5F5F5] relative">
      
      {/* === MOBILE: Horizontal Swipe (Unchanged) === */}
      <div className="lg:hidden w-full h-[65vh] relative sticky top-20 z-10"> 
        <div className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            {images.map((img, idx) => (
                <div key={idx} className="snap-center w-full h-full flex-shrink-0 relative bg-[#e5e5e5]">
                    <Image src={img} alt="Product" fill className="object-cover" priority={idx === 0}/>
                </div>
            ))}
        </div>
        <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-[#1a1a1a]">
            {images.length} Looks
        </div>
      </div>

      {/* === DESKTOP: Vertical Stack (No internal scrollbar) === */}
      <div className="hidden lg:flex flex-col w-full">
        {images.map((img, idx) => (
           <DesktopImageCard key={idx} src={img} index={idx} total={images.length} />
        ))}
      </div>
    </div>
  );
};

// Single Card for Desktop
const DesktopImageCard = ({ src, index, total }) => {
    return (
        // We keep the height calculation so each image is a full "view", 
        // but now the window scrolls past them.
        <section className="h-[calc(100vh-5rem)] w-full flex items-center justify-center relative overflow-hidden bg-[#e5e5e5] border-b border-white/20 sticky top-20">
            
            {/* Image Container */}
            <motion.div 
                className="relative w-[80%] h-[85%] shadow-2xl overflow-hidden bg-white"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }} 
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <motion.div
                    className="w-full h-full relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                >
                    <Image src={src} alt={`View ${index + 1}`} fill className="object-cover" quality={100} priority={index === 0}/>
                </motion.div>
            </motion.div>

            {/* Side Numbering */}
            <motion.div 
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="absolute left-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-20 mix-blend-multiply"
            >
                <span className="text-[10px] font-bold tracking-[0.3em] text-[#1a1a1a] -rotate-90 whitespace-nowrap">
                    VIEW {index + 1}
                </span>
                <div className="w-[1px] h-12 bg-[#1a1a1a]/40"></div>
                <span className="text-[10px] text-gray-400 font-serif">0{total}</span>
            </motion.div>
        </section>
    );
};


// =====================================================================
// RIGHT SIDE: DETAILS (Sticky Sidebar)
// =====================================================================
const DetailsSection = () => {
  const dispatch = useAppDispatch();
  const [selectedSize, setSelectedSize] = useState('');
  const [customMeasurements, setCustomMeasurements] = useState({ bust: '', waist: '', hips: '', length: '' });
  const [activeAccordion, setActiveAccordion] = useState('details'); 

  const handleAddToBag = () => {
    if (!selectedSize) return alert('Please select a size');
    dispatch(addProduct({ ...PRODUCT, selectedSize, customMeasurements, quantity: 1 }));
  };

  return (
    // DESKTOP: Sticky positioning logic
    // lg:sticky = Sticks to the screen
    // lg:top-20 = Starts sticking exactly below the navbar (which is h-20)
    // lg:h-[calc(100vh-5rem)] = Ensures the sidebar fits perfectly in the view
    <div className="col-span-12 lg:col-span-5 relative bg-white flex flex-col lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)]">
        
        {/* Scrollable Content inside the sticky container */}
        <div className="flex-1 overflow-y-auto px-5 py-8 lg:px-12 lg:py-12 scrollbar-hide">
            
            <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-[1px] bg-[#960018]"></span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#960018] font-bold">Bridal Couture '25</span>
            </div>

            <div className="mb-8">
                <h1 className="text-3xl lg:text-5xl font-serif text-[#1a1a1a] mb-2 leading-tight">{PRODUCT.title}</h1>
                <div className="flex items-baseline gap-6">
                    <p className="text-xl lg:text-2xl font-serif text-[#1a1a1a]">{formatPrice(PRODUCT.price)}</p>
                    <span className="text-[8px] uppercase tracking-widest text-gray-500 bg-gray-100 px-2 py-1 rounded-sm">Made to Order</span>
                </div>
            </div>

            <p className="text-xs lg:text-sm leading-7 text-gray-500 font-light mb-10 font-sans border-l-2 border-gray-100 pl-4">
                {PRODUCT.description}
            </p>

            {/* Size Selector */}
            <div className="mb-10">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]">Select Size</span>
                    <button className="flex items-center gap-1 text-[9px] uppercase tracking-wider text-gray-400 hover:text-[#960018] transition-colors underline decoration-gray-200 underline-offset-4">
                        <Straighten style={{ fontSize: 14 }} /> Size Guide
                    </button>
                </div>
                <div className="grid grid-cols-3 lg:grid-cols-6 gap-3">
                    {PRODUCT.sizes.map((size) => (
                        <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`
                                h-10 w-full border text-[10px] font-bold transition-all duration-200 relative
                                ${selectedSize === size 
                                    ? 'border-[#1a1a1a] bg-[#1a1a1a] text-white shadow-lg' 
                                    : 'border-gray-200 text-gray-500 hover:border-[#960018] hover:text-[#960018]'}
                            `}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            {/* Custom Measurements Form */}
            <AnimatePresence>
                {selectedSize === 'Custom' && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden mb-8 bg-[#FAFAFA] p-5 border border-dashed border-gray-300"
                    >
                        <span className={`${scriptFont.className} text-2xl text-[#C5A080] block mb-4`}>Your Measurements</span>
                        <div className="grid grid-cols-2 gap-4">
                            {['bust', 'waist', 'hips', 'length'].map((f) => (
                                <div key={f} className="relative pt-3">
                                    <input type="number" className="peer w-full bg-transparent border-b border-gray-300 py-1 text-sm focus:outline-none focus:border-[#960018]" onChange={(e) => setCustomMeasurements({...customMeasurements, [f]: e.target.value})} />
                                    <label className="absolute left-0 top-0 text-[9px] uppercase tracking-wider text-gray-400 transition-all peer-focus:text-[#960018]">{f} (in)</label>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Accordions */}
            <div className="border-t border-gray-100">
                <AccordionItem title="Fabric & Details" isOpen={activeAccordion === 'details'} onClick={() => setActiveAccordion(activeAccordion === 'details' ? null : 'details')}>
                    <ul className="list-disc list-inside space-y-2 pb-5 pl-1">
                        {PRODUCT.details.map((d, i) => <li key={i} className="text-[11px] text-gray-500 font-light">{d}</li>)}
                    </ul>
                </AccordionItem>
                <AccordionItem title="Shipping & Delivery" isOpen={activeAccordion === 'shipping'} onClick={() => setActiveAccordion(activeAccordion === 'shipping' ? null : 'shipping')}>
                    <div className="flex gap-3 pb-5 pl-1">
                        <LocalShippingOutlined className="text-[#C5A080] text-lg"/>
                        <p className="text-[11px] text-gray-500 font-light leading-relaxed">{PRODUCT.shipping}</p>
                    </div>
                </AccordionItem>
            </div>
        </div>

        {/* Action Bar (Pinned to bottom of Sticky Sidebar) */}
        <div className="p-4 lg:p-6 border-t border-gray-100 bg-white">
             <div className="flex gap-3">
                <button onClick={handleAddToBag} className="flex-1 bg-[#1a1a1a] text-white h-12 lg:h-14 flex items-center justify-center gap-2 uppercase tracking-[0.2em] text-[10px] lg:text-[11px] font-bold hover:bg-[#960018] transition-all shadow-xl shadow-gray-200">
                    Add to Bag
                </button>
                <button className="w-12 h-12 lg:w-14 lg:h-14 border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#960018] hover:text-[#960018] transition-colors">
                    <FavoriteBorder />
                </button>
            </div>
        </div>
    </div>
  );
};

const AccordionItem = ({ title, isOpen, onClick, children }) => (
    <div className="border-b border-gray-100">
        <button onClick={onClick} className="w-full py-4 flex justify-between items-center text-left group">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a] group-hover:text-[#960018] transition-colors">{title}</span>
            <KeyboardArrowDown className={`transition-transform duration-300 text-gray-300 group-hover:text-[#960018] ${isOpen ? 'rotate-180' : ''}`} style={{ fontSize: 16 }} />
        </button>
        <AnimatePresence>
            {isOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

// =====================================================================
// MAIN LAYOUT
// =====================================================================
export default function ProductPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* 
          MAIN WRAPPER:
          Removed h-screen/overflow-hidden. 
          Now the page flows naturally.
      */}
      <main className="w-full pt-20 relative">
        <div className="w-full lg:grid lg:grid-cols-12 relative">
            
            {/* Left: Gallery (Naturally Tall) */}
            <GallerySection images={PRODUCT.images} />
            
            {/* Right: Details (Sticky) */}
            <DetailsSection />

        </div>
      </main>

      {/* Footer is now reachable */}
      <Footer />
    </div>
  );
}