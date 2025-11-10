// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

    const firebaseConfig = {
        apiKey: "AIzaSyCURZmF85crSV43mKk_fqCrSqDCm-LBXPQ",
        authDomain: "login-59d00.firebaseapp.com",
        projectId: "login-59d00",
        storageBucket: "login-59d00.firebasestorage.app",
        messagingSenderId: "928737536923",
        appId: "1:928737536923:web:54d2ef951e27fae6b40f3e",
        measurementId: "G-TM0TXJBYHW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

//Provedor Google
const googleProvider = new GoogleAuthProvider();

//Função logion popup
async function signInWithGooglePopup() {
try{
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
} 
catch (error){
    throw error;
}
}

//funçao logout 
async function logout() {
    await signOut(auth);
}
export {auth, googleProvider, signInWithGooglePopup, logout};