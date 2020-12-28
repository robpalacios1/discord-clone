import React from 'react'
import './Login.css'

const Login = () => {

    const signIn = (event) => {
        // signin
    }

    return (
        <div className="login">
            <h2>Iam the login page</h2>
            <div className="login__logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/98/Discord_logo.svg/880px-Discord_logo.svg.png"
                    alt=""
                />
            </div>
            <button onClick={signIn}>Sign In</button>
        </div>
    )
}

export default Login
