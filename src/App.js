import React from 'react'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import Inicio from "./components/inicio";
import Blog from "./components/blog";
import Tienda from "./components/tienda";
import Error404 from "./components/error404";
import Carrito from "./components/carrito";
import reducer from './reducer/tiendaReducer'


function App() {
    //Reducer función que edita el estado global
    const store = createStore(reducer)
    

    return (
        <Provider store={store}>
            <Contenedor>
                <Router>
                    <Menu>
                        <NavLink to="/">Inicio</NavLink>
                        <NavLink to="/blog">Blog</NavLink>
                        <NavLink to="/tienda">Tienda</NavLink>
                    </Menu>
                    <main>
                        <Switch>
                            <Route path="/" exact={true}>
                                <Inicio />
                            </Route>
                            <Route path="/blog">
                                <Blog />
                            </Route>
                            <Route path="/tienda" component={Tienda}/>
                            <Route>
                                <Error404 />
                            </Route>
                        </Switch>
                    </main>
                    <aside>
                        <Carrito />
                    </aside>
                </Router>
            </Contenedor>
        </Provider>
    );
}

const Contenedor = styled.div`
    max-width: 1000px;
    padding: 40px;
    width: 90%;
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr;
    background: #fff;
    margin: 40px 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Menu = styled.nav`
    width: 100%;
    text-align: center;
    background: #092c4c;
    grid-column: span 2;
    border-radius: 3px;
 
    a {
        color: #fff;
        display: inline-block;
        padding: 15px 20px;
    }
 
    a:hover {
        background: #1d85e8;
        text-decoration: none;
    }
`;

export default App;
