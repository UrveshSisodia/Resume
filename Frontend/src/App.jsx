import './App.css'
import Header from './Header'
import Home from './Home'
import AboutUs from './AboutUs'
import PrivacyPolicy from './PrivacyPolicy'
import { Routes, Link, Route } from "react-router"
import Login from './Login'
import SignUp from './SignUp'
import ResumeBuild from './ResumeBuild'
import Footer from './Footer'

function App() {

  return (
    <>
   
      <Header />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/ResumeBuild" element={<ResumeBuild />} />
      </Routes>
    </>
  )
}

export default App
