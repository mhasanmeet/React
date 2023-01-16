import React, {useState} from 'react'

function SignIn() {


  return (
    <div className="signin">
        <form onSubmit className="form">
            <h3>Sign In</h3>
            <div className="input">
                <label htmlFor="email">Email</label>
               <input type="email" id="email" onChange/>
            </div>
            <div className="input">
                <label htmlFor="password">Password</label>
               <input type="password" id="password" onChange/>
            </div>
            <div className="input">
                <button type="submit">Login</button>
            </div>
        </form>
    </div>
  )
}

export default SignIn