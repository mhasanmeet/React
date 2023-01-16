import React from 'react'
import {NavLink} from "react-router-dom"
import "../../styles/signedoutlinks.scss";

function SignedOutLinks() {
  let activeStyle = {
    textDecoration: "underline",
  }

  return (
    <div className="signedoutlinks">
        <li>
          <NavLink to="/" style={({isActive}) => isActive ? activeStyle : undefined} className="link">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/" style={({isActive}) => isActive ? activeStyle : undefined} className="link">
            Login
          </NavLink>
        </li>
    </div>
  )
}

export default SignedOutLinks