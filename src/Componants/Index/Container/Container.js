import React from 'react'
import ContainerBox from '../../Home/Container/ContainerBox'

function Container() {
    return (
        <div className="container text-center">

            <h1><img src="Images/icon-small.png" style={{paddingRight:'10px'}} />
            <span>Welcome to </span>Snapmepix</h1>
            <ContainerBox image1="Images/1.jpg" image2="Images/1.jpg" image3="Images/2.jpg" image4="Images/2.jpg" image5="Images/3.jpg" image6="Images/3.jpg" ></ContainerBox>
        </div>
    )
}

export default Container