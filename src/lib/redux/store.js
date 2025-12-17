import { configureStore } from '@reduxjs/toolkit';
import activeUserSlice from './features/ActiveUserSlice/ActiveUserSlice';
import bagSlice from './features/BagSlice/BagSlice';

// Configure the Redux store
export const createStore = () => {
  return configureStore({
    reducer: {
      activeUser: activeUserSlice,
      bag: bagSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        },
      }),
    devTools: process.env.NODE_ENV !== 'production',
  });
};

// Export store instance
export const Store = createStore;