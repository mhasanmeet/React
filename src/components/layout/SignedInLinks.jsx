import React from 'react'
import { NavLink } from "react-router-dom";
import "../../styles/signedinlinks.scss";

function SignedInLinks() {
  let activeStyle = {
    textDecoration: "underline",
  }
  
  return (
    <div className="signedInLinks">
        <li>
          <NavLink to="/" style={({isActive}) => isActive ? activeStyle : undefined} className="link">
            New Project
          </NavLink></li>
        <li>
          <NavLink to="/" style={({isActive}) => isActive ? activeStyle : undefined} className="link">
            Log Out
          </NavLink>
        </li>
        <li>
          <NavLink to="/" style={({isActive}) => isActive ? activeStyle : undefined} className="link btn">
            MH
          </NavLink>
        </li>
    </div>
  )
}

export default SignedInLinks