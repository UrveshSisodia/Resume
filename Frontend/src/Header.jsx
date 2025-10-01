import { Link } from "react-router"

import './App.css'
function Header() {

  return (
    <>
    <div className="logo">
        <a href="/"><h1>Resume Builder</h1></a>
        
      <span className="Navbar">
        <Link to='/'>Home</Link>
        <Link to='/AboutUs'>AboutUs</Link>
        <Link to='/PrivacyPolicy'>PrivacyPolicy</Link>
        <Link to='/Login'>
        <button>Login</button>
        </Link>
        <Link to='/Signup'>
        <button>SignUp</button>
        </Link>
          
      </span>
      </div>
    </>
  )

}

export default Header