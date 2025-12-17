'use client';

import { useRef, useEffect } from 'react';
import { Provider } from 'react-redux';
import { Store } from '@/lib/redux/store';
import { setUser, clearUser, setLoading } from '@/lib/redux/features/ActiveUserSlice/ActiveUserSlice';

/**
 * Redux Store Provider Component
 * Manages Redux store initialization and auth state synchronization
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element} Provider component
 */
export default function StoreProvider({ children }) {
  const storeRef = useRef(null);

  // Initialize store only once
  if (!storeRef.current) {
    storeRef.current = Store();
  }

  useEffect(() => {
    const store = storeRef.current;
    if (!store) return;
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
