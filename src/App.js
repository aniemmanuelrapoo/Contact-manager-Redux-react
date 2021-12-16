import React, { Component } from 'react';
import './App.css'
import Header from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import Contacts from './components/contacts/Contacts';
import { Provider } from './context';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import About from './components/pages/About';
import AddContact from './components/contacts/AddContact';


class App extends Component {
  render() {
    return (
    <Router>
      <Provider>
          <div className='App'>
          <Header branding="Contact Manager" />
          <div className="container">
          <Switch>
            <Route exact path="/"><Contacts /></Route>
            <Route exact path="/contact/add"><AddContact /></Route>
            <Route exact path="/about"><About /></Route>
            <Route exact path="/about"><About /></Route>
          </Switch>
          </div>
          </div>
      </Provider>
      </Router>
    );
  }
}

export default withRouter(App);
