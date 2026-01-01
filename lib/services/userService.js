import {
    doc,
    setDoc,
    getDoc,
    updateDoc,
    collection,
    query,
    where,
    getDocs,
    serverTimestamp
} from 'firebase/firestore'
import { db } from '../firebase'

/**
 * Create a new user profile in Firestore
 */
export async function createUserProfile(uid, userData) {
    try {
        const userRef = doc(db, 'users', uid)

        const profileData = {
            email: userData.email,
            displayName: userData.displayName,
            role: userData.role,
            createdAt: serverTimestamp(),
            profileComplete: true,
        }

        // Add role-specific data
        if (userData.role === 'student' && userData.studentData) {
            profileData.studentData = userData.studentData
        } else if (userData.role === 'senior' && userData.seniorData) {
            profileData.seniorData = userData.seniorData
        } else if (userData.role === 'faculty' && userData.facultyData) {
            profileData.facultyData = userData.facultyData
        }

        await setDoc(userRef, profileData)
        return { success: true, data: profileData }
    } catch (error) {
        console.error('Error creating user profile:', error)
        return { success: false, error: error.message }
    }
}

/**
 * Get user profile from Firestore
 */
export async function getUserProfile(uid) {
    try {
        const userRef = doc(db, 'users', uid)
        const userSnap = await getDoc(userRef)

        if (userSnap.exists()) {
            return { success: true, data: userSnap.data() }
        } else {
            return { success: false, error: 'User profile not found' }
        }
    } catch (error) {
        console.error('Error getting user profile:', error)
        return { success: false, error: error.message }
    }
}

/**
 * Update user profile in Firestore
 */
export async function updateUserProfile(uid, updates) {
    try {
        const userRef = doc(db, 'users', uid)
        await updateDoc(userRef, {
            ...updates,
            updatedAt: serverTimestamp()
        })
        return { success: true }
    } catch (error) {
        console.error('Error updating user profile:', error)
        return { success: false, error: error.message }
    }
}

/**
 * Get all users by role
 */
export async function getUsersByRole(role) {
    try {
        const usersRef = collection(db, 'users')
        const q = query(usersRef, where('role', '==', role))
        const querySnapshot = await getDocs(q)

        const users = []
        querySnapshot.forEach((doc) => {
            users.push({ id: doc.id, ...doc.data() })
        })

        return { success: true, data: users }
    } catch (error) {
        console.error('Error getting users by role:', error)
        return { success: false, error: error.message }
    }
}

/**
 * Get all mentors (seniors and faculty)
 */
export async function getMentors() {
    try {
        const usersRef = collection(db, 'users')
        const seniorQuery = query(usersRef, where('role', '==', 'senior'))
        const facultyQuery = query(usersRef, where('role', '==', 'faculty'))

        const [seniorSnapshot, facultySnapshot] = await Promise.all([
            getDocs(seniorQuery),
            getDocs(facultyQuery)
        ])

        const mentors = []
        seniorSnapshot.forEach((doc) => {
            mentors.push({ id: doc.id, ...doc.data() })
        })
        facultySnapshot.forEach((doc) => {
            mentors.push({ id: doc.id, ...doc.data() })
        })

        return { success: true, data: mentors }
    } catch (error) {
        console.error('Error getting mentors:', error)
        return { success: false, error: error.message }
    }
}
