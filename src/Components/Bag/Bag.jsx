'use client';

import { useState } from 'react'; // Added useState for local mock management
import { motion, AnimatePresence } from 'framer-motion';
import { IconButton } from '@mui/material';
import Image from 'next/image';
import { 
  Close, 
  Add, 
  Remove, 
  DeleteOutline, 
  ArrowForward,
  LocalMall
} from '@mui/icons-material';

// Redux (Kept imports for structure, but we will use Mock Data below)
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { closeBag } from '@/lib/redux/features/BagSlice/BagSlice';

const formatPrice = (price) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(price);

// === 1. MOCK DATA (Using your requested samples) ===
const INITIAL_MOCK_PRODUCTS = [
  {
    id: 1,
    title: 'Mehandi Dress',
    image: '/Gallery/2/DF-02_3.jpg', // Main image
    price: 29.99,
    originalPrice: 39.99,
    selectedSize: 'M', // Sample Size
    selectedColor: 'White',
    quantity: 1,
  },
  {
    id: 2,
    title: 'Bridal Dress',
    image: '/Gallery/1/DFB-01_4.jpg',
    price: 49.99,
    originalPrice: 64.99,
    selectedSize: 'L', // Sample Size
    selectedColor: 'Navy',
    quantity: 1,
  },
];

/**
 * Single Cart Item Component
 */
const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="flex gap-4 py-6 border-b border-gray-100 last:border-0"
    >
      {/* Image */}
      <div className="relative w-24 h-32 flex-shrink-0 bg-gray-50 overflow-hidden">
        <Image
          src={item.image} 
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-serif text-[#1a1a1a] text-lg leading-tight w-[80%]">
              {item.title}
            </h3>
            <p className="font-serif text-[#1a1a1a] text-sm font-medium">
              {formatPrice(item.price)}
            </p>
          </div>
          
          <div className="flex gap-3 text-[10px] text-gray-500 uppercase tracking-widest mb-1">
             <span>Size: {item.selectedSize}</span>
             <span>|</span>
             <span>Color: {item.selectedColor}</span>
          </div>

          {/* Show Custom Measurements if applicable */}
          {item.selectedSize === 'Custom' && item.customMeasurements && (
            <div className="text-[9px] text-gray-400 bg-gray-50 p-2 mt-1 rounded-sm border border-gray-100">
               <span className="font-bold text-[#C5A080] uppercase tracking-wider block mb-1">Custom Fit</span>
               <div className="grid grid-cols-2 gap-x-2">
                 <span>Bust: {item.customMeasurements.bust}"</span>
                 <span>Waist: {item.customMeasurements.waist}"</span>
                 <span>Hips: {item.customMeasurements.hips}"</span>
                 <span>Length: {item.customMeasurements.length}"</span>
               </div>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="flex justify-between items-end mt-3">
          {/* Quantity */}
          <div className="flex items-center gap-4 border border-gray-200 px-3 py-1">
            <button 
              onClick={() => item.quantity > 1 ? onUpdateQuantity(item.id, item.quantity - 1) : onRemove(item.id)}
              className="text-gray-400 hover:text-[#1a1a1a] transition-colors"
            >
              <Remove style={{ fontSize: 14 }} />
            </button>
            <span className="text-xs font-medium w-4 text-center">{item.quantity}</span>
            <button 
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="text-gray-400 hover:text-[#1a1a1a] transition-colors"
            >
              <Add style={{ fontSize: 14 }} />
            </button>
          </div>

          {/* Remove */}
          <button 
            onClick={() => onRemove(item.id)}
            className="text-[10px] uppercase tracking-wider text-gray-400 border-b border-transparent hover:text-[#960018] hover:border-[#960018] transition-all flex items-center gap-1"
          >
            <DeleteOutline style={{ fontSize: 14 }} /> Remove
          </button>
        </div>
      </div>
    </motion.div>
  );
};

/**
 * Main Bag Drawer Component
 */
const Bag = () => {
  const dispatch = useAppDispatch();
  
  // === LOCAL MOCK STATE FOR DEMO ===
  // In a real app, you would rely solely on the selectors below
  const [products, setProducts] = useState(INITIAL_MOCK_PRODUCTS);

  // Calculations based on local mock state
  const totalItems = products.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = products.reduce((total, item) => total + (item.price * item.quantity), 0);
  const isEmpty = products.length === 0;

  // Handlers for Local Mock Data
  const handleRemove = (id) => {
    setProducts(products.filter(item => item.id !== id));
  };

  const handleUpdateQty = (id, newQty) => {
    setProducts(products.map(item => 
      item.id === id ? { ...item, quantity: newQty } : item
    ));
  };

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => dispatch(closeBag())}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]"
      />

      {/* Sliding Drawer */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-white z-[9999] shadow-2xl flex flex-col"
      >
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-white">
           <div className="flex items-center gap-3">
              <h2 className="font-serif text-2xl text-[#1a1a1a]">Shopping Bag</h2>
              <span className="bg-[#1a1a1a] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
           </div>
           <IconButton onClick={() => dispatch(closeBag())}>
             <Close className="text-[#1a1a1a]" />
           </IconButton>
        </div>

        {/* Free Shipping Progress */}
        {!isEmpty && (
           <div className="bg-[#FAFAFA] px-6 py-3 border-b border-gray-100">
              <p className="text-[10px] text-gray-500 uppercase tracking-widest text-center mb-2">
                 Free Shipping on all orders
              </p>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                 <motion.div 
                   initial={{ width: 0 }} 
                   animate={{ width: '100%' }} 
                   transition={{ delay: 0.3, duration: 1 }}
                   className="h-full bg-[#C5A080]" 
                 />
              </div>
           </div>
        )}

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-2 scrollbar-hide">
          {isEmpty ? (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
               <LocalMall style={{ fontSize: 48, marginBottom: 16, color: '#e5e5e5' }} />
               <h3 className="font-serif text-xl mb-2">Your bag is empty</h3>
               <p className="text-xs text-gray-400 max-w-[200px] mb-6">
                 Looks like you haven't found your perfect match yet.
               </p>
               <button 
                 onClick={() => dispatch(closeBag())}
                 className="text-[10px] font-bold uppercase tracking-widest border-b border-[#1a1a1a] pb-1 hover:text-[#960018] hover:border-[#960018] transition-colors"
               >
                 Start Shopping
               </button>
            </div>
          ) : (
            <div className="flex flex-col">
              <AnimatePresence>
                {products.map((item) => (
                   <CartItem 
                     key={item.id} 
                     item={item} 
                     onRemove={handleRemove}
                     onUpdateQuantity={handleUpdateQty}
                   />
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Footer */}
        {!isEmpty && (
          <div className="border-t border-gray-100 p-6 bg-white space-y-4">
             
             {/* Totals */}
             <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                   <span className="text-gray-500">Subtotal</span>
                   <span className="font-bold text-[#1a1a1a] font-serif">{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                   <span className="text-gray-400">Shipping</span>
                   <span className="text-green-700 uppercase tracking-wider font-bold text-[9px]">Free</span>
                </div>
             </div>

             {/* Checkout Button */}
             <button 
               onClick={() => console.log('Checkout')}
               className="w-full bg-[#1a1a1a] text-white py-4 flex items-center justify-center gap-3 hover:bg-[#960018] transition-all duration-300 group"
             >
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Proceed to Checkout</span>
                <ArrowForward style={{ fontSize: 16 }} className="group-hover:translate-x-1 transition-transform" />
             </button>

             <p className="text-[9px] text-gray-400 text-center">
               Tax included. Shipping calculated at checkout.
             </p>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default Bag;