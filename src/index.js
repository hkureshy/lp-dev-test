import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import {
  Router,
  Route,
  browserHistory,
  IndexRoute,
  IndexRedirect
} from 'react-router';
import reduxThunk from 'redux-thunk';
import _ from 'underscore';

import { Colors } from './config/styles';
import { LandingView, SignUpView, SurveyView, CongratsView } from './components/Main';

import './../sass/style.scss';
import App from './components/app';
import rootReducer from './rootReducer';

const createStoreWithMiddleware = compose(
  applyMiddleware(reduxThunk)(createStore)
);
const store = createStoreWithMiddleware(rootReducer);

let redirect = '/' // eslint-disable-line

const bodyColorPaths = [];

browserHistory.listen((location) => {
  if (_.contains(bodyColorPaths, location.pathname)) {
    document.body.style.backgroundColor = Colors.black;
  } else {
    document.body.style.backgroundColor = Colors.white;
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to={redirect} />
        <IndexRoute component={LandingView} />
        <Route path="/signup" component={SignUpView} />
        <Route path="/survey" component={SurveyView} />
        <Route path="/congrats" component={CongratsView} />
      </Route>
    </Router>
  </Provider>,
  document.querySelector('.page-container')
);
