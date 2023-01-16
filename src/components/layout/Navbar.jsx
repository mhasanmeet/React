import React from 'react'
import { Link } from "react-router-dom"
import "../../styles/navbar.scss";
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

function Navbar() {
  return (
    <div className="navbar">
        <div className="container">
            <Link to="/" className="brand-logo">App</Link>
            <div className="links">
                <SignedOutLinks/>
                <SignedInLinks/>
            </div>
        </div>
    </div>
  )
}

export default Navbar