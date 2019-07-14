import React from 'react';
import { Route } from 'react-router-dom'

import HomePage from './routes/HomePage'
import Login from './routes/Login';
import Register from './routes/Register';
import Dashboard from './routes/Dashboard';
import UserRoute from './routes/UserRoute'
import GuestRoute from './routes/GuestRoute'

const App = ({ location }) => <>
  {/* <Route path="/" exact component={HomePage} /> */}
  <GuestRoute location={location} path="/" exact component={Login} />
  <GuestRoute location={location} path="/register" exact component={Register} />
  <UserRoute location={location} path="/dashboard" exact component={Dashboard} />
</>

export default App;