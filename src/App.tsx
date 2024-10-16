import SignInPage from "./Pages/SignInPage/SignInPage"
import SignUpPage from "./Pages/SignUpPage/SignUpPage"
import HomePage from "./Pages/HomePage/HomePage"
import { Routes,Route } from "react-router-dom"
export default function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/login" element={<SignInPage/>}/>
    <Route path="/signup" element={<SignUpPage/>}/>
  </Routes>
  
  </>
  )
}