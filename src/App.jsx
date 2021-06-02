
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Provider } from 'react-redux'
import generateStore from './redux/store'

import Header from './views/Header';
import Posts from './views/Posts';
import Post from './views/Post';
import Footer from './views/Footer';
import Tasks from './views/Tasks'
import Events from './components/Events'
import AboutUs from './views/AboutUs'
import Pokemons from './views/Pokemons'


  /**
   * En caso de querer que el dom no pinte el <div class="container"> contendor hay varias opciones:
   * 1) Importar Fragments y usarlas de contenedor
   * 2) usar <> y </> como contendor
   * 
   * en ambas opciones no se mostrará el contendor div
   */

function App() {
  const store = generateStore()
  return (
    <div className="main">
      <Router>
        <Header />
        <Switch>
            <Route path="/tasks">
              <Tasks />
            </Route>
            <Route path="/events">
              <Events />
            </Route>
            <Route path="/about-us">
              <AboutUs />
            </Route>
            <Route path="/posts/:id">
              <Post />
            </Route>
            <Route path="/posts">
              <Posts />
            </Route>
            <Route path="/Pokemons">
              <Provider store={store}>
                <Pokemons />
              </Provider>
            </Route>
            <Route path="/" exact>
              Home
            </Route>
            
          </Switch>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;