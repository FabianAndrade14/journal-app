import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useCheckAuth = () => {
    const { status } = useSelector(state => state.auth);
    const dispatch = useDispatch();
  
    useEffect(() => {
  
      onAuthStateChanged(FirebaseAuth, async (user) => {
        if (!user) return dispatchEvent(logout());
        const { uid, email, displayName, photoURL } = user;
        dispatch(login({ uid, email, displayName, photoURL }));
      })
  
    }, []);
}
