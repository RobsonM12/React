
import Home from './paginas/Home/home';
import Navbar from './components/estaticos/navbar/Navebar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Login from './paginas/login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './store/store';
import ListaTema from './components/temas/ListaTema/ListaTema';
import ListaPostagem from './components/postagens/ListaPostagem/ListaPostagem';
import CadastroPost from './components/postagens/CadastroPostagem/CadastroPost';
import CadastroTema from './components/temas/CadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/DeletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/DeletarTema/DeletarTema';
import 'react-toastify/dist/ReactToastify.css'
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />
        <Switch>
          <div style={{ minHeight: "100vh" }}>

            <Route exact path="/">
              <Login />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/cadastro">
              <CadastroUsuario />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/temas">
              <ListaTema />
            </Route>

            <Route path="/posts">
              <ListaPostagem />
            </Route>

            <Route exact path='/formularioPostagem'>
              <CadastroPost />
            </Route>

            <Route exact path='/formularioPostagem/:id'>
              <CadastroPost />
            </Route>

            <Route exact path='/formularioTema'>
              <CadastroTema />
            </Route>

            <Route exact path='/formularioTema/:id'>
              <CadastroTema />
            </Route>

            <Route path='/deletarPostagem/:id'>
              <DeletarPostagem />
            </Route>

            <Route path='/deletarTema/:id'>
              <DeletarTema />
            </Route>

          </div>
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;