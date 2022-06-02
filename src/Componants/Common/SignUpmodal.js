import React from 'react'
const SignUpmodal = () => {
    return (
<>
        {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
    </button> */}
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-content border-0 " id="exampleModal">
        <div className=" signup-wrapper signup-block">
            <div className="sign-img">
                <img src="Images/signupbg.jpg" />
            </div>
            <div className="lblcreate">Create Account</div>
            <div className="field">
                <input type="text" className="" placeholder="Username"/>
                <input type="text" className="" placeholder="Email"/>
                <input type="text" className="" placeholder="Password"/>
                <span>Terms & Conditions</span>
                <div className="term-condition">
                    <input type="checkbox" name="name" value=" " />
                    <span className="ms-2">I have read & Agree to the Terms & Conditions</span>
                </div>
                <a type="submit" className="createbtn" data-bs-dismiss="modal">Create Account</a>
            </div>
        </div>
    </div>
</div>
</>
    )
}

export default SignUpmodal;
