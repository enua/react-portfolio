import React from 'react'
import Image from './Image'
import Events from './Events'

const paragraph = () => {
  return (
    <div>
      <p>Wellcome to this portfolio react site</p>
      <Image image="https://picsum.photos/200/300"/>
      <Events />
    </div>
  )
}

export default paragraph
