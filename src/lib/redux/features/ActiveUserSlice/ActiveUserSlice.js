import { createSlice } from '@reduxjs/toolkit';

// Initial state for the active user slice
const initialState = {
  user: null,
  userInfo: null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

const activeUserSlice = createSlice({
  name: 'activeUser',
  initialState,
  reducers: {
    // Set user data and mark as authenticated
    setUser: (state, action) => {
      const { user, userInfo } = action.payload;
      state.user = user;
      state.userInfo = userInfo;
      state.loading = false;
      state.error = null;
      state.isAuthenticated = true;
    },
    
    // Clear user data and mark as unauthenticated
    clearUser: (state) => {
      state.user = null;
      state.userInfo = null;
      state.loading = false;
      state.error = null;
      state.isAuthenticated = false;
    },
    
    // Set loading state
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    
    // Set error state
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    
    // Update user info
    updateUserInfo: (state, action) => {
      if (state.userInfo) {
        state.userInfo = { ...state.userInfo, ...action.payload };
      }
    },
  },
});

// Export actions
export const {
  setUser,
  clearUser,
  setLoading,
  setError,
  updateUserInfo,
} = activeUserSlice.actions;

// Selectors
export const selectUser = (state) => state.activeUser.user;
export const selectUserInfo = (state) => state.activeUser.userInfo;
export const selectUserLoading = (state) => state.activeUser.loading;
export const selectUserError = (state) => state.activeUser.error;
export const selectIsAuthenticated = (state) => state.activeUser.isAuthenticated;

export default activeUserSlice.reducer;
