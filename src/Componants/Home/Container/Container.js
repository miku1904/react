import React from 'react'
import ContainerBox from './ContainerBox'

function Container() {
    return (
        <div className="container text-center mt-5">

            <h1><img src="Images/icon-small.png" style={{paddingRight:'10px'}} />
            <span>Welcome to </span>Snapmepix</h1>
            <ContainerBox image1="Images/5.jpg" image2="Images/6.jpg" image3="Images/7.jpg" image4="Images/8.jpg" image5="Images/9.jpg" image6="Images/10.jpg" ></ContainerBox>
        </div>
    )
}

export default Container;