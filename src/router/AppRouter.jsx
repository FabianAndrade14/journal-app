import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { CheckingAuth } from "../ui"

import { useCheckAuth } from "../hooks"

export const AppRouter = () => {

  const  status  = useCheckAuth();

  if (status === 'checking') {
    return <CheckingAuth />
  }

  return (
    <Routes>

      {
        (status === 'authenticated')
          ? <Route path="/*" element={<JournalRoutes />}></Route>
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
