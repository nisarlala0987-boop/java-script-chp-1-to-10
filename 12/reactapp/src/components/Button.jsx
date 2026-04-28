import React from 'react'

function Button(props) {
  return (
    <div>
      <h1>{props.title || props.subtitle}</h1>
      </div>
  )
}




export default Button