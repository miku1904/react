import React from 'react'

const LoginModal = () => {
  return (
    <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-content border-0 topmodal" id="exampleModal">
            <div className="lblcreate">LOGIN</div>
            <div className="field1">
                <input type="text" className="" placeholder="Email"/>
                <input type="text" className="" placeholder="Password"/>
                </div>
                <div className="modal-footer loginbtn"> 
                <button type="button" className="btn btn-danger loginbtn1" data-bs-dismiss="modal">Login</button>

                </div>
            </div>
        </div>

  )
}

export default LoginModal;
