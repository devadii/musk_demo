import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  collection,
  query,
  where,
  getDocs,
  orderBy,
  limit,
} from 'firebase/firestore';
import { db } from '../firebaseConfig';

// Collection names
const COLLECTIONS = {
  USERS: 'users',
  ORDERS: 'orders',
  PRODUCTS: 'products',
};

/**
 * Add a new user to Firestore
 * @param {string} userId - User ID
 * @param {Object} userInfo - User information
 * @returns {Promise<void>}
 */
export const addUser = async (userId, userInfo) => {
  try {
    if (!userId || !userInfo) {
      throw new Error('User ID and user info are required');
    }

    const userRef = doc(db, COLLECTIONS.USERS, userId);
    await setDoc(userRef, {
      ...userInfo,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error adding user:', error);
    throw new Error('Failed to add user to database');
  }
};

/**
 * Get user information from Firestore
 * @param {string} userId - User ID
 * @returns {Promise<Object|null>} User data or null
 */
export const getUser = async (userId) => {
  try {
    if (!userId) {
      throw new Error('User ID is required');
    }

    const userRef = doc(db, COLLECTIONS.USERS, userId);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      return userSnap.data();
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error getting user:', error);
    throw new Error('Failed to get user from database');
  }
};

/**
 * Update user information in Firestore
 * @param {string} userId - User ID
 * @param {Object} updates - Updates to apply
 * @returns {Promise<void>}
 */
export const updateUser = async (userId, updates) => {
  try {
    if (!userId || !updates) {
      throw new Error('User ID and updates are required');
    }

    const userRef = doc(db, COLLECTIONS.USERS, userId);
    await updateDoc(userRef, {
      ...updates,
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error updating user:', error);
    throw new Error('Failed to update user in database');
  }
};

/**
 * Delete user from Firestore
 * @param {string} userId - User ID
 * @returns {Promise<void>}
 */
export const deleteUser = async (userId) => {
  try {
    if (!userId) {
      throw new Error('User ID is required');
    }

    const userRef = doc(db, COLLECTIONS.USERS, userId);
    await deleteDoc(userRef);
  } catch (error) {
    console.error('Error deleting user:', error);
    throw new Error('Failed to delete user from database');
  }
};

/**
 * Get user by email
 * @param {string} email - User email
 * @returns {Promise<Object|null>} User data or null
 */
export const getUserByEmail = async (email) => {
  try {
    if (!email) {
      throw new Error('Email is required');
    }

    const usersRef = collection(db, COLLECTIONS.USERS);
    const q = query(usersRef, where('email', '==', email), limit(1));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      return { id: userDoc.id, ...userDoc.data() };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error getting user by email:', error);
    throw new Error('Failed to get user by email');
  }
};

/**
 * Get all users (admin function)
 * @param {number} limitCount - Maximum number of users to return
 * @returns {Promise<Array>} Array of users
 */
export const getAllUsers = async (limitCount = 50) => {
  try {
    const usersRef = collection(db, COLLECTIONS.USERS);
    const q = query(usersRef, orderBy('createdAt', 'desc'), limit(limitCount));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('Error getting all users:', error);
    throw new Error('Failed to get users from database');
  }
};


