import React from 'react'

function User(props) {
  return (
    <div>User
<h1>{props.name}</h1>
<h1>{props.age}</h1>

    </div>

  )
}

export default User