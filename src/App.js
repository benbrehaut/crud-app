import React from 'react';
import { Route } from 'react-router-dom'

import './Static/scss/app.scss'

import Login from './routes/Login';
import Register from './routes/Register';
import Dashboard from './routes/Dashboard';
import UserRoute from './routes/UserRoute'
import GuestRoute from './routes/GuestRoute'
import Confirmation from './routes/Confirmation'
import ForgottenPassword from './routes/ForgottenPassword'
import ResetPassword from './routes/ResetPassword'

const App = ({ location }) => <>
  <GuestRoute location={location} path="/" exact component={Login} />
  <GuestRoute location={location} path="/register" exact component={Register} />
  <GuestRoute location={location} path="/forgot-password" exact component={ForgottenPassword} />
  <GuestRoute location={location} path="/reset-password/:token" exact component={ResetPassword} />
  <UserRoute location={location} path="/dashboard" exact component={Dashboard} />
  <Route location={location} path="/confirmation/:token" exact component={Confirmation} />
</>

export default App;