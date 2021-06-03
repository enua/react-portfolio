import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { auth } from './firebase'

import Header from './views/Header';
import Posts from './views/Posts';
import Post from './views/Post';
import Footer from './views/Footer';
import Tasks from './views/Tasks'
import Events from './components/Events'
import AboutUs from './views/AboutUs'
import Pokemons from './views/Pokemons'
import Login from './components/Login'


  /**
   * En caso de querer que el dom no pinte el <div class="container"> contendor hay varias opciones:
   * 1) Importar Fragments y usarlas de contenedor
   * 2) usar <> y </> como contendor
   * 
   * en ambas opciones no se mostrará el contendor div
   */

function App() {

  /* AUTH CHECK BY FIREBASE */
  const [firebaseUser, setFirebaseUser] = React.useState(null) //TODO: should be null?

  React.useEffect(() => {
    const fetchUser = () => {
      auth.onAuthStateChanged(user => {
        if (user) {
          setFirebaseUser(user)
        } else {
          setFirebaseUser(null)
        }
      })
    }
    fetchUser()
  }, [])

  const PrivedRoute = ({component, path, ...rest}) => {
    if (localStorage.getItem('user')) {
      const userStorage = JSON.parse(localStorage.getItem('user'))
      if (userStorage.uid === firebaseUser.uid) {
        return <Route component={component} path={path} rest={rest} />
      } else {
        return redirectToLogin({component, path, ...rest})
      }
    } else {
      return redirectToLogin({component, path, ...rest})
    }
  }

  const redirectToLogin = ({component, path, ...rest}) => {
    return <Redirect to="/login" {...rest} />
  }
  return firebaseUser !== false ? (
    <div className="main">
      <Router>
        <Header />
        <Switch>
            <Route path="/tasks" component={Tasks} />
            <Route path="/events" component={Events} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/posts/:id" component={Post} />
            <PrivedRoute path="/posts" component={Posts} />
            <PrivedRoute path="/pokemons" component={Pokemons} />
            <Route path="/login" component={Login} />
            <Route path="/" exact>
              Home
            </Route>            
          </Switch>        
        <Footer />
      </Router>
    </div>
  ) : ( <div>... Loading</div> );
}

export default App;
