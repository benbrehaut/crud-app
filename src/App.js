import React from 'react';
import { Route } from 'react-router-dom'

import HomePage from './routes/HomePage'
import Login from './routes/Login';
import Dashboard from './routes/Dashboard';
import UserRoute from './routes/UserRoute'
import GuestRoute from './routes/GuestRoute'

const App = ({ location }) => <>
  {/* <Route path="/" exact component={HomePage} /> */}
  <GuestRoute location={location} path="/" exact component={Login} />
  <UserRoute location={location} path="/dashboard" exact component={Dashboard} />
</>

export default App;