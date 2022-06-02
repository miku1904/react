import React from "react";


 function Navlogo() {
    return (
            <div className="col-md-8 col-xs-12">
                <div className="logo"> 
                <a href="home.html">
                    <img src="Images/snapmepix-logo.png" alt="SnapMePix Logo" />
                    </a>
                </div>
                <ul>
                    <li><i className="fa fa-user"></i><a href="SignUp.html" >Sign Up</a></li>
                    <li><i className="fa fa-sign-in"></i><a href="login.html" >Sign In</a></li>
                </ul>
            </div>
       
    )
}

export default Navlogo;


