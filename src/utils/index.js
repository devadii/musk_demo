// Utility Functions

/**
 * Formats price with currency symbol
 * @param {string|number} price - The price to format
 * @param {string} currency - Currency symbol (default: 'Rs')
 * @returns {string} Formatted price string
 */
export const formatPrice = (price, currency = 'Rs') => {
  return `${currency} ${price}`;
};

/**
 * Calculates discount percentage
 * @param {string|number} originalPrice - Original price
 * @param {string|number} currentPrice - Current/sale price
 * @returns {number} Discount percentage
 */
export const calculateDiscount = (originalPrice, currentPrice) => {
  const original = parseFloat(originalPrice);
  const current = parseFloat(currentPrice);
  return Math.round(((original - current) / original) * 100);
};

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function to limit function calls
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Generates a unique ID
 * @returns {string} Unique identifier
 */
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

/**
 * Validates email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email format
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Clamps a number between min and max values
 * @param {number} num - Number to clamp
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Clamped number
 */
export const clamp = (num, min, max) => {
  return Math.min(Math.max(num, min), max);
};

/**
 * Converts string to kebab-case
 * @param {string} str - String to convert
 * @returns {string} Kebab-case string
 */
export const toKebabCase = (str) => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
};

/**
 * Capitalizes first letter of string
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 */
export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Truncates text to specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @param {string} suffix - Suffix to add (default: '...')
 * @returns {string} Truncated text
 */
export const truncateText = (text, maxLength, suffix = '...') => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + suffix;
};

/**
 * Gets error message from Firebase error
 * @param {Error} error - Firebase error object
 * @param {Object} errorMessages - Custom error messages mapping
 * @returns {string} User-friendly error message
 */
export const getFirebaseErrorMessage = (error, errorMessages = {}) => {
  const defaultErrors = {
    'auth/email-already-in-use': 'The email address is already associated with another account.',
    'auth/invalid-email': 'The provided email address is invalid.',
    'auth/user-not-found': 'There is no user corresponding to the given email.',
    'auth/wrong-password': 'The password is invalid for the provided email.',
    'auth/weak-password': 'The password does not meet the required complexity.',
    'auth/invalid-credential': 'Invalid Credentials',
  };

  const allErrors = { ...defaultErrors, ...errorMessages };
  const errorCode = error.code;
  const errorMessage = error.message;

  if (Object.keys(allErrors).includes(errorCode)) {
    return allErrors[errorCode];
  } else {
    return `An unexpected error occurred: ${errorMessage}`;
  }
};

/**
 * Creates a class name string from multiple classes
 * @param {...string} classes - Class names to combine
 * @returns {string} Combined class names
 */
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Checks if device is mobile
 * @returns {boolean} True if mobile device
 */
export const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

/**
 * Formats file size in human readable format
 * @param {number} bytes - File size in bytes
 * @returns {string} Formatted file size
 */
export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};
