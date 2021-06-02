
import Header from './views/Header';
import Main from './views/Main';
import Footer from './views/Footer';

  /**
   * En caso de querer que el dom no pinte el <div class="container"> contendor hay varias opciones:
   * 1) Importar Fragments y usarlas de contenedor
   * 2) usar <> y </> como contendor
   * 
   * en ambas opciones no se mostrará el contendor div
   */

function App() {
  return (
    <div className="main">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
