import React from 'react'

const Form = () => {

  const [users, setUsers] = React.useState([])

  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')

  const validateForm = (event) => {
    event.preventDefault()

/*     const userList = users;
    
    userList.push({
      name: name,
      description: description,
    }) */
    
    setUsers([
      ...users,
      {
        name: name,
        description: description,
      }
    ])

    console.log(users)
    
    event.target.reset()
  }

  return (
    <div className="container">
      <h2>Schedule meet</h2>
      <form onSubmit={ validateForm }>
        <input 
          type="text"
          placeholder="Add name value"
          className="form-control mb-2"
          onChange={ (event) => setName(event.target.value) }
        />
        <input 
          type="text"
          placeholder="Description"
          className="form-control mb-2"
          onChange={ (event) => setDescription(event.target.value) }
        />
        <button className="btn btn-primary btn-block mb-2">Send</button>
      </form>
      <div className="card" >
        <ul className="list-group list-group-flush">
              {
                users.map((user, index) => (<li className="list-group-item" key={index}>{ user.name } - { user.description }</li>))
              }
        </ul>
      </div>
    </div>
  )
}

export default Form
