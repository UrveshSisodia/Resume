import { Link } from "react-router"
function Login() {

    return (
        <>
            <div className="login_and_signup">
                <div className="login_and_signup_box">

                    <h1>Welcome Back</h1>
                    <form action="Post">


                        <label htmlFor="Userame">Username</label>
                        <input type="text" placeholder="enter your username " />
                        <label htmlFor="Password">Password</label>
                        <input type="Password" placeholder="enter your password " />
                        <a href="">Forget Password? </a>
                        <Link to="/">
                            <button>Login</button>
                        </Link>


                    </form>
                </div>
            </div>
        </>
    )

}

export default Login