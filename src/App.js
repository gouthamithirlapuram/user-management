import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Switch>
          <Route exact path="/" component={UserList} />
          <Route path="/add" component={UserForm} />
          <Route path="/edit/:id" component={UserForm} />
        </Switch>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
