import React, { Component } from 'react';
import './App.css'
import Header from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import Contacts from './components/contacts/Contacts';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import About from './components/pages/About';
import AddContact from './components/contacts/AddContact';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';
import EditContact from './components/contacts/EditContact';
import { Provider } from 'react-redux';
import store from './store';


class App extends Component {
  render() {
    return (
    <Router basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
          <div className='App'>
          <Header branding="Contact Manager" />
          <div className="container">
          <Switch>
            <Route exact path="/"><Contacts /></Route>
            <Route exact path="/contact/add"><AddContact /></Route>
            <Route exact path="/about"><About /></Route>
            <Route exact path="/test"><Test /></Route>
            <Route exact path="/contact/edit/:id"><EditContact /></Route>
            <Route><NotFound /></Route>
          </Switch>
          </div>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default withRouter(App);
