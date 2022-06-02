import React from 'react'

const Photowrapper = () => {
  return (
    <div>
       <div className="text-center mt-5">
            <h1><span>My Submitted</span>Photos</h1>
        </div>
        <div className="photo-wrapper m-5">
            <div className="photo-block">
                <img src="Images/Photos/1.jpg" />                
            </div>
            <div className="photo-block">
                <img src="Images/Photos/2.jpg" />                
            </div>
            <div className="photo-block">
                <img src="Images/Photos/3.jpg" />               
            </div>
            <div className="photo-block">
                <img src="Images/Photos/4.jpg" />               
            </div>
            <div className="photo-block">
                <img src="Images/Photos/5.jpg" />                
            </div>
            <div className="photo-block">
                <img src="Images/Photos/6.jpg" />                
            </div>
            <div className="photo-block">
                <img src="Images/Photos/7.jpg" />               
            </div>
        </div>
        <div className="view-more">
            <a>
                <i className="fa fa-long-arrow-right"></i>
                <span>View</span>
                More
            </a>
        </div>
    </div>
    
  )
}

export default Photowrapper;
