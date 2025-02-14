import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider );
        const credentials = GoogleAuthProvider.credentialFromResult( result );
        console.log({ credentials });
        

    } catch (error) {
        console.log(error);
        
    }
}