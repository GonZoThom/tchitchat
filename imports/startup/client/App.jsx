import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Logged     from '/imports/ui/components/Routes/Logged';
import NotLogged  from '/imports/ui/components/Routes/NotLogged';
import Landing    from '/imports/ui/modules/Landing';
import Rooms      from '/imports/ui/modules/Rooms';
import Users      from '/imports/ui/modules/Users';

import {
  Connexion,
  Inscription,
  Missing,
  Settings,
  Verify
} from '/imports/ui/modules/Account';

const App = () => (
  <Router>
    <Switch>
      <NotLogged    path="/landing"        component={Landing}      />
      <Logged       path="/rooms/:id?"      component={Rooms}        />
      <Logged       path="/users/:id"      component={Users}        />
      <NotLogged    path="/signin"         component={Connexion}    />
      <NotLogged    path="/signup"         component={Inscription}  />
      <NotLogged    path="/missing"        component={Missing}      />
      <Logged       path="/settings"       component={Settings}     />
      <Logged       path="/verify/:token"  component={Verify}       />
    </Switch>
  </Router>
);

export default App;