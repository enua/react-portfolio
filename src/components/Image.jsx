import React from 'react'

const Image = (props) => {
  return (
    <div>
      <img src={props.image} alt={props.image}/>
    </div>
  )
}

export default Image
