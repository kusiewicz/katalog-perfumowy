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
        {/* Render the same component for each price category based on data in CATALOGROUTES */}
        {catalogRoutes.map((category) => (
          <Route path={category.url} key={category}>
            <Catalog price={category.price} sex={category.sex} />
          </Route>
        ))}

        {/* Catch-all route */}
        <Route>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
