import axios from 'axios';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { addUser, getUser } from '../firestore/user';
import { getFirebaseErrorMessage } from '../../../utils';

/**
 * Register a new user with email and password
 * @param {string} email - User's email
 * @param {string} password - User's password
 * @param {Object} userInfo - Additional user information
 * @returns {Promise<Object>} User credential and user info
 */
export const registerUser = async (email, password, userInfo = {}) => {
  try {
    // Validate input
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    // Create new user
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Update user profile if display name provided
    if (userInfo.displayName) {
      await updateProfile(user, {
        displayName: userInfo.displayName,
      });
    }

    // Send email verification
    await sendEmailVerification(user);

    // Add user info to Firestore
    await addUser(user.uid, {
      email: user.email,
      displayName: userInfo.displayName || '',
      createdAt: new Date().toISOString(),
      ...userInfo,
    });

    return {
      user: user.toJSON(),
      userInfo: {
        email: user.email,
        displayName: userInfo.displayName || '',
        ...userInfo,
      },
    };
  } catch (error) {
    const errorMessage = getFirebaseErrorMessage(error);
    throw new Error(errorMessage);
  }
};

/**
 * Sign in user with email and password
 * @param {string} email - User's email
 * @param {string} password - User's password
 * @returns {Promise<Object>} User credential and user info
 */
export const signInUser = async (email, password) => {
  try {
    // Validate input
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    // Sign in user
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Get user info from Firestore
    const userInfo = await getUser(user.uid);

    return {
      user: user.toJSON(),
      userInfo,
    };
  } catch (error) {
    const errorMessage = getFirebaseErrorMessage(error);
    throw new Error(errorMessage);
  }
};

/**
 * Sign out current user
 * @returns {Promise<void>}
 */
export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    const errorMessage = getFirebaseErrorMessage(error);
    throw new Error(errorMessage);
  }
};

/**
 * Send password reset email
 * @param {string} email - User's email
 * @returns {Promise<void>}
 */
export const resetPassword = async (email) => {
  try {
    if (!email) {
      throw new Error('Email is required');
    }

    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    const errorMessage = getFirebaseErrorMessage(error);
    throw new Error(errorMessage);
  }
};

/**
 * Verify email with oob code
 * @param {string} apiKey - Firebase API key
 * @param {string} oobCode - Out of band code
 * @returns {Promise<Object>} Verification response
 */
export const verifyEmail = async (apiKey, oobCode) => {
  try {
    if (!apiKey || !oobCode) {
      throw new Error('API key and oob code are required');
    }

    const url = `${process.env.NEXT_PUBLIC_FIREBASE_AUTH_REST_API}/accounts:update?key=${apiKey}`;
    const requestBody = { oobCode };

    const response = await axios.post(url, requestBody);
    return response.data;
  } catch (error) {
    throw new Error('An unexpected error occurred during email verification.');
  }
};

/**
 * Set up auth state listener
 * @param {Function} callback - Callback function to handle auth state changes
 * @returns {Function} Unsubscribe function
 */
export const onAuthStateChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};

/**
 * Get current user
 * @returns {Object|null} Current user or null
 */
export const getCurrentUser = () => {
  return auth.currentUser;
};

/**
 * Check if user is authenticated
 * @returns {boolean} True if user is authenticated
 */
export const isAuthenticated = () => {
  return !!auth.currentUser;
};
