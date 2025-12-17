import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Custom hook for managing video carousel state
 * @param {Array} items - Array of carousel items
 * @param {number} defaultSpeed - Default timer speed in milliseconds
 * @returns {Object} Carousel state and controls
 */
export const useVideoCarousel = (items = [], defaultSpeed = 5000) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [timerSpeed, setTimerSpeed] = useState(defaultSpeed);
  const videoRef = useRef(null);

  useEffect(() => {
    if (items.length === 0) return;

    const interval = setInterval(() => {
      setCurrentItemIndex((prev) => (prev + 1) % items.length);
    }, timerSpeed);

    return () => clearInterval(interval);
  }, [items, timerSpeed]);

  const handleLoadedMetadata = useCallback(() => {
    const duration = videoRef.current?.duration;
    if (!isNaN(duration) && duration > 0) {
      setTimerSpeed(duration * 1000);
    }
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrentItemIndex(index);
  }, []);

  return {
    currentItemIndex,
    timerSpeed,
    videoRef,
    handleLoadedMetadata,
    goToSlide,
    currentMedia: items[currentItemIndex]?.images?.[0] || items[currentItemIndex]?.mediaURL,
  };
};

/**
 * Custom hook for managing modal/dialog state
 * @param {boolean} initialOpen - Initial open state
 * @returns {Object} Modal state and controls
 */
export const useModal = (initialOpen = false) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);
  const toggleModal = useCallback(() => setIsOpen(prev => !prev), []);

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal,
  };
};

/**
 * Custom hook for managing local storage
 * @param {string} key - Storage key
 * @param {*} initialValue - Initial value
 * @returns {Array} [value, setValue]
 */
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = useCallback((value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue];
};

/**
 * Custom hook for managing window size
 * @returns {Object} Window dimensions
 */
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call handler right away so state gets updated with initial window size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

/**
 * Custom hook for managing scroll position
 * @returns {Object} Scroll position and controls
 */
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', updatePosition);
    updatePosition(); // Set initial position

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};

/**
 * Custom hook for managing intersection observer
 * @param {Object} options - Intersection observer options
 * @returns {Array} [ref, isIntersecting]
 */
export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        ...options,
      }
    );

    observer.observe(ref);

    return () => {
      observer.unobserve(ref);
    };
  }, [ref, options]);

  return [setRef, isIntersecting];
};

/**
 * Custom hook for managing async operations
 * @param {Function} asyncFunction - Async function to execute
 * @param {Array} dependencies - Dependencies array
 * @returns {Object} Async state and controls
 */
export const useAsync = (asyncFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = useCallback(async (...args) => {
    try {
      setLoading(true);
      setError(null);
      const result = await asyncFunction(...args);
      setData(result);
      return result;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, dependencies);

  return {
    data,
    loading,
    error,
    execute,
  };
};

/**
 * Custom hook for managing previous value
 * @param {*} value - Current value
 * @returns {*} Previous value
 */
export const usePrevious = (value) => {
  const ref = useRef();
  
  useEffect(() => {
    ref.current = value;
  });
  
  return ref.current;
};
