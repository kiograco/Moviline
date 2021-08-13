import React from 'react';
import {Link} from "react-router-dom";
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pags/Home/index';
import Series from './pags/Series/index';
import Filmes from './pags/Filmes/index';
import Playlists from './pags/Playlists/index';

import {Body} from './pags/Filmes/style';


function App() {
  return (
    <Body>
          <h1>MOVILINE</h1>

          <div>
            <BrowserRouter>
              <nav>
                <Link to='/Home'>Home</Link>
                <Link to='/Series'>Serie</Link>
                <Link to='/Filmes'>Filme</Link>
                <Link to='/Playlists'>Playlists</Link>
              </nav>
              <Switch>
                  {/* <Route path="/" exact={true} component={App} /> */}
                  <Route path="/Series" component={Series} />
                  <Route path="/Filmes" component={Filmes} />
                  <Route path="/Playlists" component={Playlists} />
                  <Route path="/Home" component={Home} />
              </Switch>
            </ BrowserRouter>
          </div>
    
    </Body>
  )
}

export default App;
