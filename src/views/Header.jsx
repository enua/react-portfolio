import React from 'react'
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { logoutSessionAction } from "../redux/userDucks";
import { withRouter } from 'react-router-dom'

const Header = (props) => {
  const dispatch = useDispatch()
  const logout = () => {
    dispatch(logoutSessionAction())
  }
  
  const active = useSelector(store => store.user.active)
   /* React.useEffect(() => {
    if (!active) {
      props.history.push('/login')
    }
  }) */
  return (
      <div className="navbar navbar-expand-lg navbar-dark bg-dark flex-column-reverse">

        <div className="">
          <NavLink to="/" className="btn btn-dark mr-2 mr2" exact>Home</NavLink>
          <NavLink to="/tasks" className="btn btn-dark mr-2">Tasks</NavLink>
          <NavLink to="/events" className="btn btn-dark mr-2">Events</NavLink>
          <NavLink to="/about-us" className="btn btn-dark mr-2">About us</NavLink>
          <NavLink to="/posts" className="btn btn-dark mr-2">Posts</NavLink>
          <NavLink to="/pokemons" className="btn btn-dark mr-2">Pokemons</NavLink>
          {
            active ? (
              <button 
                onClick={ () => logout() }
                className="btn btn-dark mr-2"
              >Logout</button>
            ) : (
              <NavLink to="/login" className="btn btn-dark mr-2" exact>Login</NavLink>
            )
          }
        </div>
        
      </div>

  )
}

export default withRouter(Header)
