import { Link } from "react-router"

function SignUp() {

    return (
        <>
            <div className="login_and_signup">
                <div className="login_and_signup_box">

                    <h1>SignUp</h1>
                    <form action="Post">


                        <label htmlFor="Username">Username</label>
                        <input type="text" placeholder="enter your username " />

                        <label htmlFor="Email">Email</label>
                        <input type="email" placeholder="enter Your Email address " />

                        <label htmlFor="Password">Password</label>
                        <input type="Password" placeholder="enter your password" />
                        <Link to="/Login">
                            <button>Sign Up</button>
                        </Link>


                    </form>
                </div>
            </div>
        </>
    )

}

export default SignUp