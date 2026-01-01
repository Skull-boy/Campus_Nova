import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail,
    updateProfile
} from 'firebase/auth'
import { auth } from '../firebase'
import { createUserProfile, getUserProfile } from './userService'

/**
 * Register a new user with email and password
 */
export async function registerUser(email, password, userData) {
    try {
        // Create auth user
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user

        // Update display name
        if (userData.displayName) {
            await updateProfile(user, {
                displayName: userData.displayName
            })
        }

        // Create user profile in Firestore
        await createUserProfile(user.uid, {
            email,
            displayName: userData.displayName,
            role: userData.role,
            ...userData.profileData
        })

        return { success: true, user }
    } catch (error) {
        console.error('Registration error:', error)
        return {
            success: false,
            error: error.code === 'auth/email-already-in-use'
                ? 'This email is already registered.'
                : error.message
        }
    }
}

/**
 * Sign in user with email and password
 */
export async function loginUser(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user

        // Fetch user profile from Firestore
        const profile = await getUserProfile(user.uid)

        return { success: true, user, profile }
    } catch (error) {
        console.error('Login error:', error)
        return {
            success: false,
            error: error.code === 'auth/invalid-credential'
                ? 'Invalid email or password.'
                : error.message
        }
    }
}

/**
 * Sign out current user
 */
export async function logoutUser() {
    try {
        await signOut(auth)
        return { success: true }
    } catch (error) {
        console.error('Logout error:', error)
        return { success: false, error: error.message }
    }
}

/**
 * Send password reset email
 */
export async function resetPassword(email) {
    try {
        await sendPasswordResetEmail(auth, email)
        return { success: true }
    } catch (error) {
        console.error('Password reset error:', error)
        return {
            success: false,
            error: error.code === 'auth/user-not-found'
                ? 'No account found with this email.'
                : error.message
        }
    }
}

/**
 * Subscribe to auth state changes
 */
export function onAuthChange(callback) {
    return onAuthStateChanged(auth, callback)
}

/**
 * Get current authenticated user
 */
export function getCurrentUser() {
    return auth.currentUser
}
