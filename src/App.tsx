import SignInPage from "./Components/SignInPage/SignInPage"
import SignUpPage from "./Components/SignUpPage/SignUpPage"
import { Routes,Route } from "react-router-dom"
export default function App() {
  return (
  <>
  <Routes>
    <Route path="/login" element={<SignInPage/>}/>
    <Route path="/signup" element={<SignUpPage/>}/>
  </Routes>
  
  </>
  )
}