import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import SurveyIntro from './Survey/SurveyIntro';
// import store from './store';
import HomePage from './AdminDashboard/HomePage';
import FormContainer from './Forms/FormContainer';
import ResultCard from './Result/ResultCard';
import registerServiceWorker from './registerServiceWorker';
import { Route, Switch, HashRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/" exact component={FormContainer} />
      <Route path="/login" exact component={FormContainer} />
      <Route path="/login/admin" exact component={FormContainer} />
      <Route path="/password_reset" component={FormContainer} />
      <Route path="/signup" component={FormContainer} />
      <Route path="/survey" component={App} />
      <Route path="/introPage" component={SurveyIntro} />
      <Route path="/login/adminPage" component={HomePage} />
      <Route path="/resultcard" component={ResultCard} />
    </Switch>
  </HashRouter>, document.getElementById('root'));
registerServiceWorker();
