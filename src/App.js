import React, {Component} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';

import routes from "./routes";
import withTracker from "./withTracker";
import { ProtectedRoute } from './components/shared/ProtectedRoute'
import { LoggedInRoute } from './components/shared/LoggedInRoute'
import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import Login from 'components/login'
import {checkAuthState, logout} from 'components/login/actions'
const store = require('./reducers').init();

class App extends Component {
  componentWillMount() {
    this.checkAuthState();
  }

  checkAuthState() {
    store.dispatch(checkAuthState());
  }
  logout() {
    store.dispatch(logout());
  }
  render() {
    return (
      <Provider store={store}>
        <Router basename={process.env.REACT_APP_BASENAME || ""}>
          <div>
            <LoggedInRoute path="/login" component={Login} />
            {routes.map((route, index) => {
              return (
                <ProtectedRoute
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={withTracker(props => {
                    return (
                      <route.layout {...props}>
                        <route.component {...props} />
                      </route.layout>
                    );
                  })}
                />
              );
            })}
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
