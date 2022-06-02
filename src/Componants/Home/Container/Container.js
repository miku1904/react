import React from 'react'
import ContainerBox from './ContainerBox';


const Container = () => {
  return (
    <div className="container text-center">
	<h1><img src="Images/icon-small.png"  style={{paddingRight:"10px"}} /><span>Welcome to </span>Snapmepix</h1>
    <ContainerBox/>
    </div>
  )
}

export default Container;
