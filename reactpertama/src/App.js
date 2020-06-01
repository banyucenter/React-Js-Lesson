import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import Blog from './Component/Functional/Blog';
// import FungsiKomponent from './Component/Functional/FungsiKomponent';
// import KelasComponent from './Component/Classes/KelasComponent';
import Home from './Component/Classes/Home';
import Produk from './Component/Classes/Produk';

function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/produk">Produk</Link>
              </li>

            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/produk">
              <Produk />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>

  );
}

export default App;
