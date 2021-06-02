import React from 'react'
import { fetchUsers } from '../services/users'

const AboutUs = () => {
  const [users, setUsers] = React.useState([])

  async function getDataFromUser() {  
    setUsers(await fetchUsers())
  }

  React.useEffect(() => {
    getDataFromUser()
  }, [])

  return (
    <div className="container">
      <h1> About us</h1>
      {<ul>
        {
          users.length ? 
          users.map((user) => (
            <li key={user.id}>
              <span className="text-info">{user.name} - </span>
              <span className="text-success">{user.username} - </span>
              <span className="text-dark">{user.address.city}</span>
            </li>
          )) : ''
        }
      </ul>}
    </div>
  )
}

export default AboutUs
