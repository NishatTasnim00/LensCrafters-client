// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

	
	// apiKey: import.meta.env.VITE_APIKEY,
	// authDomain: import.meta.env.VITE_AUTHDOMAIN,
	// projectId: import.meta.env.VITE_PROJECTID,
	// storageBucket: import.meta.env.VITE_STORAGEBUCKET,
	// messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
	// appId: import.meta.env.VITE_APPID,


	apiKey: "AIzaSyDMhQEX4M4nvJmp2QuKcEdIiyWjec2x3aU",
	authDomain: "lenscrafters-c34d8.firebaseapp.com",
	projectId: "lenscrafters-c34d8",
	storageBucket: "lenscrafters-c34d8.appspot.com",
	messagingSenderId: "277212138104",
	appId: "1:277212138104:web:7f124b1462dd9219a13b8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;