const fs = require('fs');
const path = require('path');

console.log('='.repeat(60));
console.log('🔥 FIREBASE CONFIGURATION DIAGNOSTIC TOOL');
console.log('='.repeat(60));
console.log();

// Check 1: .env.local exists
const envPath = path.join(process.cwd(), '.env.local');
const envExists = fs.existsSync(envPath);

console.log('1️⃣  Environment File Check');
console.log('   File: .env.local');
if (envExists) {
    console.log('   ✅ File exists');
} else {
    console.log('   ❌ File NOT FOUND');
    console.log('   ⚠️  Action: Copy .env.local.example to .env.local');
}
console.log();

// Check 2: Environment variables
console.log('2️⃣  Environment Variables Check');
const requiredVars = [
    'NEXT_PUBLIC_FIREBASE_API_KEY',
    'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
    'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
    'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
    'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
    'NEXT_PUBLIC_FIREBASE_APP_ID'
];

let allVarsDefined = true;
requiredVars.forEach(varName => {
    const value = process.env[varName];
    const isDefined = value && value !== '' && !value.includes('your_');

    if (isDefined) {
        console.log(`   ✅ ${varName}: DEFINED`);
    } else {
        console.log(`   ❌ ${varName}: MISSING or PLACEHOLDER`);
        allVarsDefined = false;
    }
});
console.log();

// Check 3: Firebase config file
console.log('3️⃣  Firebase Configuration File');
const firebasePath = path.join(process.cwd(), 'lib', 'firebase.js');
if (fs.existsSync(firebasePath)) {
    console.log('   ✅ lib/firebase.js exists');
} else {
    console.log('   ❌ lib/firebase.js NOT FOUND');
}
console.log();

// Check 4: Firestore rules
console.log('4️⃣  Firestore Rules File');
const rulesPath = path.join(process.cwd(), 'firestore.rules');
if (fs.existsSync(rulesPath)) {
    console.log('   ✅ firestore.rules exists');
    console.log('   ℹ️  Remember to publish rules in Firebase Console');
} else {
    console.log('   ❌ firestore.rules NOT FOUND');
}
console.log();

// Summary
console.log('='.repeat(60));
console.log('📊 DIAGNOSTIC SUMMARY');
console.log('='.repeat(60));

if (!envExists) {
    console.log('❌ CRITICAL: .env.local file is missing');
    console.log();
    console.log('🔧 NEXT STEPS:');
    console.log('   1. Copy .env.local.example to .env.local');
    console.log('   2. Go to https://console.firebase.google.com/');
    console.log('   3. Open your project → Settings → General');
    console.log('   4. Copy Firebase config values to .env.local');
    console.log('   5. Restart dev server: npm run dev');
} else if (!allVarsDefined) {
    console.log('❌ CRITICAL: Environment variables contain placeholders');
    console.log();
    console.log('🔧 NEXT STEPS:');
    console.log('   1. Edit .env.local file');
    console.log('   2. Replace placeholder values with actual Firebase config');
    console.log('   3. Restart dev server: npm run dev');
} else {
    console.log('✅ Configuration looks good!');
    console.log();
    console.log('🔧 IF STILL NOT WORKING:');
    console.log('   1. Check Firebase Console for Firestore Database');
    console.log('   2. Publish security rules in Firestore → Rules tab');
    console.log('   3. Enable Email/Password auth in Authentication');
    console.log('   4. Check browser console for errors (F12)');
}

console.log();
console.log('='.repeat(60));
