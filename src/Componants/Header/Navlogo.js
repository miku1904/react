import React from 'react'
import LoginModal from '../common/LoginModal'
import SignUpmodal from '../common/SignUpmodal'

function Navlogo() {
    return (
        <div className="col-md-8 col-xs-12 ">
            <div className="logo">
                <a href="/">
                    <img src="Images/snapmepix-logo.png" alt="SnapMePix Logo" />
                </a>
            </div>
            <ul className="dharmik">
                <li><i className="fa fa-user"></i><a href="#"  data-bs-toggle="modal" data-bs-target="#exampleModal">Sign Up</a></li>
                <SignUpmodal/>
                 <li><i className="fa fa-sign-in"></i><a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal1">Sign In</a></li>
                 <LoginModal/>
             </ul>
         </div>
    )
}

export default Navlogo