'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { Great_Vibes } from 'next/font/google';
import { ArrowForward, ArrowBack, Add, FavoriteBorder } from '@mui/icons-material';

export const PRODUCTS_DATA = [
  {
    id: 1,
    title: 'Classic T-Shirt',
    image: '/Gallery/2/DF-02_3.jpg',
    imageHover: '/Gallery/2/DF-02_3.jpg', // Using main image as fallback for hover
    price: 29.99,
    originalPrice: 39.99,
    category: 'tshirts',
    colors: ['white', 'black', 'gray'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 2,
    title: 'Premium Polo',
    image: '/Gallery/1/DFB-01_4.jpg',
    imageHover: '/Gallery/1/DFB-01_4.jpg',
    price: 49.99,
    originalPrice: 64.99,
    category: 'polo',
    colors: ['navy', 'white', 'red'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 3,
    title: 'Designer Cuban',
    image: '/Gallery/2/DF-02_4.jpg',
    imageHover: '/Gallery/2/DF-02_4.jpg',
    price: 39.99,
    originalPrice: 49.99,
    category: 'cubans',
    colors: ['blue', 'white', 'pink'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 4,
    title: 'Summer Shorts',
    image: '/Products_Images/4/DFB-01_1.jpg',
    imageHover: '/Products_Images/4/DFB-01_1.jpg',
    price: 34.99,
    originalPrice: 44.99,
    category: 'shorts',
    colors: ['khaki', 'navy', 'olive'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 5,
    title: 'Urban T-Shirt',
    image: '/Gallery/3/BL-05_1-scaled.jpg',
    imageHover: '/Gallery/3/BL-05_1-scaled.jpg',
    price: 24.99,
    originalPrice: 29.99,
    category: 'tshirts',
    colors: ['black', 'white'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 6,
    title: 'Luxury Polo',
    image: '/Products_Images/6/LI-02_1-300x300.jpg',
    imageHover: '/Products_Images/6/LI-02_1-300x300.jpg',
    price: 59.99,
    originalPrice: 79.99,
    category: 'polo',
    colors: ['black', 'white', 'gray'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 7,
    title: 'Vintage Cuban',
    image: '/Products_Images/7/image0-6-300x300.png',
    imageHover: '/Products_Images/7/image0-6-300x300.png',
    price: 44.99,
    originalPrice: 54.99,
    category: 'cubans',
    colors: ['white', 'blue', 'red'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 8,
    title: 'Casual Shorts',
    image: '/Products_Images/8/image0-7-300x300.png',
    imageHover: '/Products_Images/8/image0-7-300x300.png',
    price: 29.99,
    originalPrice: 34.99,
    category: 'shorts',
    colors: ['beige', 'navy', 'green'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 9,
    title: 'Modern T-Shirt',
    image: '/Products_Images/9/image1-300x300.png',
    imageHover: '/Products_Images/9/image1-300x300.png',
    price: 27.99,
    originalPrice: 34.99,
    category: 'tshirts',
    colors: ['white', 'black'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 10,
    title: 'Sport Polo',
    image: '/Products_Images/10/image0-10-300x300.png',
    imageHover: '/Products_Images/10/image0-10-300x300.png',
    price: 54.99,
    originalPrice: 69.99,
    category: 'polo',
    colors: ['red', 'blue', 'white'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 11,
    title: 'Elegant Cuban',
    image: '/Products_Images/11/image0-8-300x300.png',
    imageHover: '/Products_Images/11/image0-8-300x300.png',
    price: 47.99,
    originalPrice: 59.99,
    category: 'cubans',
    colors: ['white', 'black', 'blue'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 12,
    title: 'Comfort Shorts',
    image: '/Products_Images/12/image0-6-300x300.jpeg',
    imageHover: '/Products_Images/12/image0-6-300x300.jpeg',
    price: 32.99,
    originalPrice: 42.99,
    category: 'shorts',
    colors: ['gray', 'navy', 'olive'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 13,
    title: 'Basic T-Shirt',
    image: '/Products_Images/13/image0-3-300x300.png',
    imageHover: '/Products_Images/13/image0-3-300x300.png',
    price: 22.99,
    originalPrice: 29.99,
    category: 'tshirts',
    colors: ['white', 'black', 'gray'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 14,
    title: 'Formal Polo',
    image: '/Products_Images/14/image0-2-300x300.png',
    imageHover: '/Products_Images/14/image0-2-300x300.png',
    price: 64.99,
    originalPrice: 79.99,
    category: 'polo',
    colors: ['navy', 'white', 'black'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 15,
    title: 'Trendy Cuban',
    image: '/Products_Images/15/image0-1-300x300.png',
    imageHover: '/Products_Images/15/image0-1-300x300.png',
    price: 52.99,
    originalPrice: 64.99,
    category: 'cubans',
    colors: ['white', 'blue', 'pink'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 16,
    title: 'Active Shorts',
    image: '/Products_Images/16/DFB-02_1-100x100.jpg',
    imageHover: '/Products_Images/16/DFB-02_1-100x100.jpg',
    price: 37.99,
    originalPrice: 47.99,
    category: 'shorts',
    colors: ['black', 'gray', 'navy'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
];


// --- UTILS ---
const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
};

// --- COMPONENT: PRODUCT CARD ---
const ProductCard = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`} className="group relative flex-shrink-0 snap-start flex flex-col gap-3 md:gap-4 cursor-pointer w-[220px] md:w-[400px]">
      
      {/* Image Container */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#e5e5e5]">
        
        {/* Badges */}
        <div className="absolute top-3 left-3 md:top-4 md:left-4 z-20 flex flex-col gap-2">
            {product.isNew && (
                <span className="px-2 py-1 md:px-3 bg-[#1a1a1a] text-white text-[8px] md:text-[9px] uppercase font-bold tracking-[0.2em]">
                    New
                </span>
            )}
            {product.originalPrice > product.price && (
                <span className="px-2 py-1 md:px-3 bg-[#960018] text-white text-[8px] md:text-[9px] uppercase font-bold tracking-[0.2em]">
                    Sale
                </span>
            )}
        </div>

        {/* Favorite Icon */}
        <button 
            onClick={(e) => {
                e.preventDefault();
            }}
            className="absolute top-3 right-3 md:top-4 md:right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 text-[#1a1a1a] backdrop-blur-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#960018] hover:text-white"
        >
            <FavoriteBorder style={{ fontSize: 16 }} />
        </button>

        {/* Images */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-1000 ease-[0.25,1,0.5,1] group-hover:scale-105"
        />
        
        {product.imageHover && (
          <img
            src={product.imageHover}
            alt={product.title}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"
          />
        )}

        {/* Quick View (Desktop Only) */}
        <div className="hidden md:block absolute inset-x-0 bottom-0 z-20 overflow-hidden">
            <div className="w-full h-12 bg-white/90 backdrop-blur-sm text-[#1a1a1a] flex items-center justify-center gap-2 text-[10px] uppercase font-bold tracking-[0.25em] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.19,1,0.22,1] hover:bg-[#1a1a1a] hover:text-white">
                <Add style={{ fontSize: 16 }} />
                <span>Quick View</span>
            </div>
        </div>
      </div>

      {/* Info Area */}
      <div className="flex justify-between items-start pt-2 border-t border-[#1a1a1a]/10">
        <div className="flex flex-col gap-1">
            <h3 className="text-sm md:text-xl font-serif text-[#1a1a1a] leading-none group-hover:text-[#960018] transition-colors">
                {product.title}
            </h3>
            <p className="text-[8px] md:text-[9px] text-gray-500 uppercase tracking-[0.2em] font-medium">
                {product.category}
            </p>
        </div>

        <div className="flex flex-col items-end pl-2 md:pl-4">
            {product.originalPrice > product.price && (
                <span className="text-[8px] md:text-[10px] text-gray-400 line-through font-mono">
                    {formatPrice(product.originalPrice)}
                </span>
            )}
            <span className="text-xs md:text-sm font-medium text-[#1a1a1a] font-mono">
                {formatPrice(product.price)}
            </span>
        </div>
      </div>
    </Link>
  );
};

// --- COMPONENT: SECTION ---
const CollectionSection = ({ title, products }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if(scrollRef.current) {
      const isMobile = window.innerWidth < 768;
      const scrollAmount = isMobile ? 250 : 450; 
      
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="py-6 md:py-16 w-full relative group/section"> 
      
      {/* Header */}
      <div className="px-4 md:px-12 mb-5 md:mb-10 flex items-end justify-between">
         <div className="flex flex-col">
            <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-[#960018] mb-1 md:mb-2">
                Handcrafted Luxury
            </span>
            <h2 className="font-serif text-xl md:text-4xl text-[#1a1a1a]">
                {title}
            </h2>
         </div>

         {/* Arrows (Desktop Only) */}
         <div className="hidden md:flex gap-0 border border-[#1a1a1a]/20">
            <button 
              onClick={() => scroll('left')} 
              className="w-14 h-14 flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors border-r border-[#1a1a1a]/20"
            >
              <ArrowBack style={{ fontSize: 20 }} />
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="w-14 h-14 flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors"
            >
              <ArrowForward style={{ fontSize: 20 }} />
            </button>
         </div>
      </div>

      {/* Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 md:gap-12 scrollbar-hide snap-x snap-mandatory items-start px-4 md:px-12 pb-4 md:pb-10"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

// --- MAIN EXPORT ---
export default function HomeProducts() {
  
  const bridalCollection = PRODUCTS_DATA.slice(0, 10);
  const pretCollection = PRODUCTS_DATA.slice(8, 18);

  return (
    <section className="bg-[#F2F0EB] w-full min-h-screen pt-10 md:pt-16 pb-8 md:pb-12 relative overflow-hidden">
      
      {/* --- CENTERED HEADING --- */}
      {/* 
          Changes: 
          - Reduced top padding of section to pt-10
          - Reduced mb of container to mb-6
          - Vertical line height reduced (h-6 mobile / h-10 desktop)
          - Heading font size reduced (text-2xl mobile / text-5xl desktop)
      */}
      <div className="relative z-10 flex flex-col items-center justify-center mb-6 md:mb-10 px-4 text-center">
         <div className="w-[1px] h-6 md:h-10 bg-[#1a1a1a] mb-3 md:mb-5" />
         
         <h1 className="font-serif text-2xl md:text-5xl text-[#1a1a1a] mb-2">
            Our Collections
         </h1>
         <p className="font-mono text-[8px] md:text-[10px] uppercase tracking-[0.25em] text-gray-500 max-w-md">
            Handmade in Pakistan
         </p>
      </div>

      <CollectionSection 
        title="Royal Wedding Edit" 
        products={bridalCollection} 
      />

      {/* Divider */}
      <div className="w-full px-4 md:px-12">
        <div className="w-full h-[1px] bg-[#1a1a1a]/10" />
      </div>

      <CollectionSection 
        title="Modern Muse" 
        products={pretCollection} 
      />

      {/* Footer Link */}
      <div className="py-8 md:pt-8 md:pb-16 flex justify-center">
          <Link href="/shop" className="relative group px-8 py-3 md:px-12 md:py-5 overflow-hidden border border-[#1a1a1a] bg-transparent">
            <span className="relative z-10 text-[#1a1a1a] group-hover:text-white text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] transition-colors duration-300">
                View All Collections
            </span>
            <div className="absolute inset-0 bg-[#1a1a1a] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
          </Link>
      </div>

    </section>
  );
}