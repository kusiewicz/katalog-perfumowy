import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as MAINROUTES from './constants/mainRoutes';
import * as CATALOGROUTES from './constants/catalogRoutes';

import { Home, Catalog } from './pages';

function App() {
  const catalogRoutes = Object.values(CATALOGROUTES);

  return (
    <Router>
      <Switch>
        <Route exact path={MAINROUTES.HOME}>
          <Home />
        </Route>

        {/* All price categories render the same catalog component */}

        {catalogRoutes.map((category) => (
          <Route path={category.url} key={category}>
            <Catalog price={category.price} />
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
