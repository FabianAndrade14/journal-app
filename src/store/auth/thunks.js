import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, logout } from "./"

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

    }
}

export const startGoogleSignIn = () => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
        const result = await signInWithGoogle();
        if (!result.ok ) dispatch( logout() )
    }
}