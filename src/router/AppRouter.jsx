import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { useDispatch, useSelector } from "react-redux"
import { CheckingAuth } from "../ui"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { FirebaseAuth } from "../firebase/config"
import { logout } from "../store/auth"

export const AppRouter = () => {

  const { status } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {

    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatchEvent(logout());
      const { uid, email, displayName, photoURL } = user;
      dispatch(login({ uid, email, displayName, photoURL }));
    })

  }, [])

  if (status === 'checking') {
    return <CheckingAuth />
  }

  return (
    <Routes>

      {
        (status === 'authentication')
          ? <Route path="/auth/*" element={<AuthRoutes />}></Route>
            : <Route path="/auth/*" element={<AuthRoutes />}></Route>
          
        }

      <Route path='/*' element={ <Navigate to='/auth/login' /> } ></Route>
      {/* Login y registro */}
      {/* <Route path="/auth/*" element={<AuthRoutes />}></Route> */}

      {/* JournalApp */}
      {/* <Route path="/*" element={<JournalRoutes />} ></Route> */}
    </Routes>
  )
}
