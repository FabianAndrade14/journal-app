import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider );
        const { displayName, email, photoURL, uid } = result.user;
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        // console.log({ credentials });

        return {
            ok: true,
            displayName, email, photoURL, uid
        }
        

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        return {
            ok: false,
            errorMessage
        }
    }
}

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;
        // Actualizar el displayName en firebase
        await updateProfile( FirebaseAuth.currentUser, {displayName});
        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (error) {
        return { ok: false, errorMessage: error.errorMessage }
    }
}

export const loginWithEmailPassword = async({ email, password }) => {
    try {
        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL, displayName } = resp.user;
        
        return {
            ok: true,
            uid, photoURL, displayName
        }
    } catch (error) {
        return { ok: false, errorMessage: error.errorMessage }
    }
}

export const logoutFirebase = async() => {

    return await FirebaseAuth.signOut();

}