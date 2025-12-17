'use client';

import { useRef, useEffect } from 'react';
import { Provider } from 'react-redux';
import { Store } from '@/lib/redux/store';
import { onAuthStateChange } from '@/lib/firebase/auth/auth';
import { getUser } from '@/lib/firebase/firestore/user';
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

    // Set initial loading state
    store.dispatch(setLoading(true));

    // Set up auth state listener
    const unsubscribe = onAuthStateChange(async (user) => {
      try {
        if (user) {
          // User is signed in
          const userInfo = await getUser(user.uid);
          store.dispatch(setUser({
            user: user.toJSON(),
            userInfo: userInfo || {},
          }));
        } else {
          // User is signed out
          store.dispatch(clearUser());
        }
      } catch (error) {
        console.error('Error handling auth state change:', error);
        store.dispatch(clearUser());
      }
    });

    // Cleanup subscription on unmount
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
