import React, { useState }from 'react'
import '../styles/events.css'

const Events = () => {

  let [text, setText] = useState('text from state')

  const [counter, setCounter] = React.useState(0);

  const clickEvent = () => {
    setText('modifing the text')
    setCounter(counter < 3 ? (counter + 1) : 0)
  }

  const users = [
    {name: 'user one'},
    {name: 'user two'},
    {name: 'user three'},
    {name: 'user four'},
  ]
  const [userList] = useState(users)

  return (
    <div className="container">
      <hr />
      <h2>Events react { text } <span className={ counter > 2 ? 'isRed' : 'isBlue' }>{ counter  }</span></h2>
      <button onClick={ () => clickEvent() }>Click me!</button>
      <h3>List</h3>
      <ul>
      {
        userList.map((user, index) => {
          return (
            <li key={index} className={ counter === index ? 'isRed' : ''}> { user.name } </li>
            )
          })
      }
      </ul>
      <hr />
    </div>
  )
}

export default Events
