import { createSlice } from '@reduxjs/toolkit';

// Initial state for the bag slice
const initialState = {
  products: [],
  isOpen: false,
  totalItems: 0,
  totalPrice: 0,
  loading: false,
  error: null,
};

const bagSlice = createSlice({
  name: 'bag',
  initialState,
  reducers: {
    // Toggle bag visibility
    toggleBag: (state) => {
      state.isOpen = !state.isOpen;
    },
    
    // Open bag
    openBag: (state) => {
      state.isOpen = true;
    },
    
    // Close bag
    closeBag: (state) => {
      state.isOpen = false;
    },
    
    // Add product to bag
    addProduct: (state, action) => {
      const product = action.payload;
      const existingProductIndex = state.products.findIndex(
        (item) => item.id === product.id && 
        item.selectedColor === product.selectedColor && 
        item.selectedSize === product.selectedSize
      );
      
      if (existingProductIndex !== -1) {
        state.products[existingProductIndex].quantity += product.quantity || 1;
      } else {
        state.products.push({
          ...product,
          quantity: product.quantity || 1,
        });
      }
      
      // Recalculate totals
      state.totalItems = state.products.reduce((sum, item) => sum + item.quantity, 0);
      state.totalPrice = state.products.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },
    
    // Remove product from bag
    removeProduct: (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter((item) => item.id !== productId);
      
      // Recalculate totals
      state.totalItems = state.products.reduce((sum, item) => sum + item.quantity, 0);
      state.totalPrice = state.products.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },
    
    // Update product quantity
    updateProductQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const product = state.products.find((item) => item.id === productId);
      
      if (product) {
        product.quantity = Math.max(0, quantity);
        
        // Remove product if quantity is 0
        if (product.quantity === 0) {
          state.products = state.products.filter((item) => item.id !== productId);
        }
        
        // Recalculate totals
        state.totalItems = state.products.reduce((sum, item) => sum + item.quantity, 0);
        state.totalPrice = state.products.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      }
    },
    
    // Clear all products from bag
    clearBag: (state) => {
      state.products = [];
      state.totalItems = 0;
      state.totalPrice = 0;
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
  },
});

// Export actions
export const {
  toggleBag,
  openBag,
  closeBag,
  addProduct,
  removeProduct,
  updateProductQuantity,
  clearBag,
  setLoading,
  setError,
} = bagSlice.actions;

// Selectors
export const selectBagProducts = (state) => state.bag.products;
export const selectBagIsOpen = (state) => state.bag.isOpen;
export const selectBagTotalItems = (state) => state.bag.totalItems;
export const selectBagTotalPrice = (state) => state.bag.totalPrice;
export const selectBagLoading = (state) => state.bag.loading;
export const selectBagError = (state) => state.bag.error;
export const selectBagIsEmpty = (state) => state.bag.products.length === 0;

export default bagSlice.reducer;
