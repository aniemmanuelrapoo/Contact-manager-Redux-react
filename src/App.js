import React, { Component } from 'react';
import './App.css'
import Header from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import Contacts from './components/contacts/Contacts';
import { Provider } from './context';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/pages/About';
import AddContact from './components/contacts/AddContact';


class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className='App'>
          <Header branding="Contact Manager" />
          <div className="container">
          <Routes>
            <Route exact path="/" element={<Contacts />} />
            <Route exact path="/contact/add" element={<AddContact />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
          </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
