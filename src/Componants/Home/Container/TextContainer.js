import React from 'react'

function TextContainer(props) {
  return (
    <div className="col-md-6 col-sm-6">
        	<h2>{props.heading}</h2>
            <p>{props.body}</p>
    </div>
  )
}

export default TextContainer