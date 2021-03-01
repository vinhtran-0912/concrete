import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderNavbar from './components/layout/HeaderNavbar/HeaderNavbar';
import LeftSidebar from './components/layout/MainSidebar/LeftSidebar';
import Categories from './components/categories';

const App = () => (
  <Router>
    <Switch>

      <div className="swapper">
        <div>
          <HeaderNavbar />
        </div>
        <div className="content">
          <LeftSidebar />
          <Route path="/categories">
            <Categories />
          </Route>
        </div>
      </div>
    </Switch>
  </Router>
);

export default App;
