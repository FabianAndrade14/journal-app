import { Login } from "@mui/icons-material";
import { checkingCredentials, login, logout } from "./";
import { registerUserWithEmailPassword, signInWithGoogle } from '../../firebase/providers';

export const checkingAuthentication = () => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

    }
}

export const startGoogleSignIn = () => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await signInWithGoogle();

        if ( !result.ok ){ return dispatch( logout( result.errorMessage ) )};

        dispatch( login(result) )
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async(dispatch) => {
        dispatch( checkingCredentials() );
        const resp = await registerUserWithEmailPassword({ email, password, displayName });

    }
}