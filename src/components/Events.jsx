import React, { useState }from 'react'

const Events = () => {

  let [text, setText] = useState('text from state')
  const clickEvent = () => {
    setText('modifing the text')
  }

  return (
    <div className="container">
      <hr />
      <h2>Events react { text }</h2>
      <button onClick={ () => clickEvent() }>Click me!</button>
    </div>
  )
}

export default Events
