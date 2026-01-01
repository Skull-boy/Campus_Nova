# Firebase Setup Guide for Campus Hero

This guide will walk you through setting up Firebase for your Campus Hero authentication system.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or "Create a project"
3. Enter project name: `campus-hero` (or your preferred name)
4. (Optional) Enable Google Analytics
5. Click "Create project" and wait for it to complete

## Step 2: Register Your Web App

1. In the Firebase console, click the **Web icon** (`</>`) to add a web app
2. Register app with nickname: "Campus Hero Web"
3. **Do NOT** check "Also set up Firebase Hosting"
4. Click "Register app"
5. You'll see your Firebase configuration - **keep this page open!**

## Step 3: Enable Authentication

1. In the left sidebar, click **"Authentication"**
2. Click **"Get started"**
3. Go to the **"Sign-in method"** tab
4. Click on **"Email/Password"**
5. Toggle **"Enable"** to ON
6. Click **"Save"**

## Step 4: Create Firestore Database

1. In the left sidebar, click **"Firestore Database"**
2. Click **"Create database"**
3. Choose **"Start in production mode"** (we'll add rules next)
4. Select your preferred location (choose closest to your users)
5. Click **"Enable"**

## Step 5: Add Security Rules

1. In Firestore Database, go to the **"Rules"** tab
2. Replace the default rules with the contents of `firestore.rules` from your project
3. Click **"Publish"**

The rules are already created in your project at:
`c:\Users\SHINJAN\Downloads\campus_nova\firestore.rules`

## Step 6: Configure Your App

1. Create a file named `.env.local` in your project root
2. Copy the template from `.env.local.example`
3. Fill in the values from your Firebase config (from Step 2):

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

**Important:** The `.env.local` file is already in `.gitignore` so your credentials won't be committed to Git.

## Step 7: Test Your Setup

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000)

3. Navigate to the signup page and create a test account for each role:
   - Student
   - Senior/Alumni
   - Faculty  
   - Admin

4. Verify the following:
   - ✅ User creation succeeds
   - ✅ User appears in Firebase Authentication
   - ✅ User profile appears in Firestore Database
   - ✅ Login works with the created account
   - ✅ Profile page displays correctly
   - ✅ Admin dashboard accessible for admin users only

## Troubleshooting

### Error: "Firebase: Error (auth/configuration-not-found)"
- Make sure you've created the `.env.local` file in the project root
- Verify all environment variables are correct
- Restart the dev server after creating/updating `.env.local`

### Error: "Missing or insufficient permissions"
- Make sure you've published the Firestore rules
- Check that the rules in Firebase match `firestore.rules`

### Users can't see other users' profiles
- This is expected! Firestore rules allow public read access
- Check the browser console for errors

## Creating Your First Admin User

Since admin accounts need special privileges, here's how to create one:

1. Sign up normally with any role
2. Go to Firebase Console → Firestore Database
3. Find your user document in the `users` collection
4. Edit the document and change `role` from current value to `"admin"`
5. Save and refresh your app
6. You should now see the admin badge and have access to `/admin`

## Next Steps

- Customize the user roles and permissions as needed
- Add more fields to user profiles
- Implement email verification (optional)
- Set up password complexity requirements
- Add social login providers (Google, GitHub, etc.)

Your authentication system is now ready! 🎉
