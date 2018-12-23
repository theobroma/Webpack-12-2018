import React, { Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import HomePage from 'containers/HomePage';
// import HomePage from 'components/HomePage';
import routes from 'config/routes';
// import PrivateRoute from 'containers/PrivateRoute';
const history = createHistory();

const MainApp = () => (
  <Fragment>
    <Router history={history}>
      <Switch>
        {/* tmp Route, later use PrivateRoute */}
        {routes.map(({ path, component, isPrivate, isExact }) =>
          isPrivate ? (
            <Route path={path} component={component} exact={isExact} key={path} />
          ) : (
            <Route path={path} component={component} exact={isExact} key={path} />
          )
        )}
      </Switch>
    </Router>
    {/* <HomePage /> */}
  </Fragment>
);

export default MainApp;
