import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUserAction } from '../redux/userDucks'
import { withRouter } from 'react-router-dom'

const Login = (props) => {
  const dispatch = useDispatch()

  const userLoading = useSelector(store => store.user.loading)
  const userActive = useSelector(store => store.user.active)

  React.useEffect(() => {
    if(userActive) {
      props.history.push('/')
    }
  }, [userActive])
  return (
    <div className="mt-5 text-center">
      <h3>Login with Google</h3>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => dispatch(loginUserAction())}
        disabled={userLoading}
      >Login</button>
    </div>
  )
}

export default withRouter(Login)
