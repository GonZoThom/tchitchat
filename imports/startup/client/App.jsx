import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Logged     from '/imports/ui/components/Routes/Logged';
import NotLogged  from '/imports/ui/components/Routes/NotLogged';
import Home       from '/imports/ui/modules/Home';
import Rooms      from '/imports/ui/modules/Rooms';
import Users      from '/imports/ui/modules/Users';

import {
  Connection,
  Inscription,
  Missing,
  Settings,
  Verify
} from '/imports/ui/modules/Account';

const App = () => (
  <Router>
    <Switch>
      <NotLogged    path="/home"           component={Home}         />
      <Logged       path="/rooms/:id"      component={Rooms}        />
      <Logged       path="/users/:id"      component={Users}        />
      <NotLogged    path="/signin"         component={Connection}   />
      <NotLogged    path="/signup"         component={Inscription}  />
      <NotLogged    path="/missing"        component={Missing}      />
      <Logged       path="/settings"       component={Settings}     />
      <Logged       path="/verify/:token"  component={Verify}       />
    </Switch>
  </Router>
);

export default App;