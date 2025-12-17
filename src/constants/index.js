// Application Constants
export const APP_CONFIG = {
  NAME: 'Zanttico',
  DESCRIPTION: 'Premium clothing brand for the bold',
  BRAND_TAGLINE: 'crafted for the bold',
};

// Navigation Constants
export const NAVIGATION = {
  MENU_ITEMS: [
    { label: 'About us', href: '/about' },
    { label: 'Categories', href: '/categories' },
    { label: 'Contact us', href: '/contact' },
    { label: 'Shop', href: '/shop' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Size Chart', href: '/size-chart' },
  ],
};

// Hero Section Images - using Home_Banners folder
export const HERO_IMAGES = [
  {
    id: 1,
    image: '/Home_Banners/1.jpg',
    title: 'Crafted for the Bold',
    subtitle: 'Premium clothing for the modern lifestyle',
  },
  {
    id: 2,
    image: '/Home_Banners/2.jpg',
    title: 'Style Redefined',
    subtitle: 'Where tradition meets contemporary design',
  },
  {
    id: 3,
    image: '/Home_Banners/3.jpg',
    title: 'Discover Excellence',
    subtitle: 'Uncompromising quality in every stitch',
  },
  {
    id: 4,
    image: '/Home_Banners/4.jpg',
    title: 'Modern Elegance',
    subtitle: 'Timeless pieces for the discerning individual',
  },
];

export const SAMPLE_PRODUCTS = [
  {
    id: 1,
    title: 'Classic T-Shirt',
    category: 'tshirts',
    price: 29.99,
    discount: 10,
    images: [
      '/Products_Images/1/DF-02_1-300x300.jpg'
    ],
    description: 'Comfortable and stylish classic t-shirt',
  },
  {
    id: 2,
    title: 'Premium Polo',
    category: 'polo',
    price: 49.99,
    discount: 15,
    images: [
      '/Products_Images/2/DF-04_1-300x300.jpg'
    ],
    description: 'High-quality polo shirt for any occasion',
  },
  {
    id: 3,
    title: 'Designer Cuban',
    category: 'cubans',
    price: 39.99,
    discount: 0,
    images: [
      '/Products_Images/3/DF-05_1-100x100.jpg'
    ],
    description: 'Elegant designer cuban shirt',
  },
  {
    id: 4,
    title: 'Summer Shorts',
    category: 'shorts',
    price: 34.99,
    discount: 20,
    images: [
      '/Products_Images/4/DFB-01_1.jpg',
      '/Products_Images/4/DFB-01_2.jpg',
      '/Products_Images/4/DFB-01_3.jpg',
      '/Products_Images/4/DFB-01_4.jpg',
      '/Products_Images/4/DFB-01_5.jpg',
      '/Products_Images/4/DFB-01_6.jpg',
      '/Products_Images/4/DFB-01_7.jpg'
    ],
    description: 'Comfortable summer shorts with multiple color options',
  },
  {
    id: 5,
    title: 'Urban T-Shirt',
    category: 'tshirts',
    price: 24.99,
    discount: 5,
    images: [
      '/Products_Images/5/image0-300x300.png'
    ],
    description: 'Modern urban style t-shirt',
  },
  {
    id: 6,
    title: 'Luxury Polo',
    category: 'polo',
    price: 59.99,
    discount: 0,
    images: [
      '/Products_Images/6/LI-02_1-300x300.jpg'
    ],
    description: 'Premium luxury polo shirt',
  },
  {
    id: 7,
    title: 'Vintage Cuban',
    category: 'cubans',
    price: 44.99,
    discount: 12,
    images: [
      '/Products_Images/7/image0-6-300x300.png'
    ],
    description: 'Classic vintage style cuban shirt',
  },
  {
    id: 8,
    title: 'Casual Shorts',
    category: 'shorts',
    price: 29.99,
    discount: 8,
    images: [
      '/Products_Images/8/image0-7-300x300.png'
    ],
    description: 'Relaxed fit casual shorts',
  },
];

export const CATALOGUE_DATA = [
  {
    id: 1,
    heading: 'T-shirts',
    image: '/Products_Images/1/DF-02_1-300x300.jpg', // First image from t-shirts
    category: 'tshirts',
  },
  {
    id: 2,
    heading: 'Polo',
    image: '/Products_Images/2/DF-04_1-300x300.jpg', // First image from polo
    category: 'polo',
  },
  {
    id: 3,
    heading: 'Cubans',
    image: '/Products_Images/3/DF-05_1-100x100.jpg', // First image from cubans
    category: 'cubans',
  },
  {
    id: 4,
    heading: 'Shorts',
    image: '/Products_Images/4/DFB-01_1.jpg', // First image from shorts
    category: 'shorts',
  },
];

export const PRODUCTS_DATA = [
  {
    id: 1,
    title: 'Classic T-Shirt',
    image: '/Products_Images/1/DF-02_1-300x300.jpg',
    price: 29.99,
    originalPrice: 39.99,
    category: 'tshirts',
    colors: ['white', 'black', 'gray'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 2,
    title: 'Premium Polo',
    image: '/Products_Images/2/DF-04_1-300x300.jpg',
    price: 49.99,
    originalPrice: 64.99,
    category: 'polo',
    colors: ['navy', 'white', 'red'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 3,
    title: 'Designer Cuban',
    image: '/Products_Images/3/DF-05_1-100x100.jpg',
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
    price: 34.99,
    originalPrice: 44.99,
    category: 'shorts',
    colors: ['khaki', 'navy', 'olive'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 5,
    title: 'Urban T-Shirt',
    image: '/Products_Images/5/image0-300x300.png',
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
    price: 37.99,
    originalPrice: 47.99,
    category: 'shorts',
    colors: ['black', 'gray', 'navy'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 17,
    title: 'Signature T-Shirt',
    image: '/Products_Images/17/DF-01-300x300.jpg',
    price: 34.99,
    originalPrice: 44.99,
    category: 'tshirts',
    colors: ['white', 'black', 'red'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
];

// Product Collections for different sections
export const HOT_COLLECTION = {
  title: 'Hot Collection',
  description: 'Explore our most recent Hot selling collection',
  products: PRODUCTS_DATA.slice(0, 9), // First 9 products
};

export const LATEST_COLLECTION = {
  title: 'Latest Collection',
  description: 'You must watch our Latest and Quality collection',
  products: PRODUCTS_DATA.slice(9, 17), // Last 8 products
};

// UI Constants
export const UI_CONFIG = {
  ANIMATION_DURATION: 5000,
  SCROLL_ANIMATION_DURATION: 10000,
  BLUR_INTENSITY: 12, // Custom numeric blur value in pixels
  BACKGROUND_BLUR: 10, // Specific blur for background images in pixels
  FOREGROUND_BLUR: 0, // Light blur for foreground if needed in pixels
  BACKDROP_BLUR: 'backdrop-blur-lg',
  BORDER_RADIUS: {
    SMALL: 'rounded-lg',
    MEDIUM: 'rounded-xl',
    LARGE: 'rounded-2xl',
    EXTRA_LARGE: 'rounded-[2.5rem]',
    FULL: 'rounded-full',
  },
  COLORS: {
    PRIMARY: '#f8f8f8',
    SECONDARY: '#ebebeb',
    ACCENT: '#343434',
    TEXT_PRIMARY: '#333333',
    TEXT_SECONDARY: '#6a6a6a',
    WHITE_OVERLAY: 'rgba(255, 255, 255, 0.5)',
    WHITE_OVERLAY_LIGHT: 'rgba(255, 255, 255, 0.7)',
  },
  SPACING: {
    CONTAINER_PADDING: 'px-4',
    SECTION_PADDING: 'py-4',
  },
  // Image optimization settings
  IMAGE_SETTINGS: {
    BACKGROUND_SCALE: 'scale-150', // Zoom background images slightly
    FOREGROUND_SCALE: 'scale-100', // Keep foreground normal
    TRANSITION_DURATION: 'duration-500', // Smooth transitions
  },
};

// Firebase Error Messages
export const FIREBASE_ERRORS = {
  'auth/email-already-in-use': 'The email address is already associated with another account.',
  'auth/invalid-email': 'The provided email address is invalid.',
  'auth/user-not-found': 'There is no user corresponding to the given email.',
  'auth/wrong-password': 'The password is invalid for the provided email.',
  'auth/weak-password': 'The password does not meet the required complexity.',
  'auth/invalid-credential': 'Invalid Credentials',
};

// API Endpoints
export const API_ENDPOINTS = {
  VERIFY_EMAIL: (apiKey) => 
    `${process.env.NEXT_PUBLIC_FIREBASE_AUTH_REST_API}/accounts:update?key=${apiKey}`,
};

// Z-Index Constants
export const Z_INDEX = {
  NAVBAR: 999,
  BAG_OVERLAY: 9999,
  MOBILE_MENU: 998,
};
