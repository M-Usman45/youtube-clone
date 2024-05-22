import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBQXyijc3HQfXoc45Jex8KRf6uKrjYoek",
  authDomain: "clone-ytube-1.firebaseapp.com",
  projectId: "clone-ytube-1",
  storageBucket: "clone-ytube-1.appspot.com",
  messagingSenderId: "415185792299",
  appId: "1:415185792299:web:415a0cb4011e358959e96e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");

export default app;
