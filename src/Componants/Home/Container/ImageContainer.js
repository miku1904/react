import React from 'react'

function ImageContainer(props) {
  return (
    <div className="col-md-3 col-sm-3">
        	<div className="content-img">
            	<img src={props.image} />
            </div>
    </div>
  )
}

export default ImageContainer