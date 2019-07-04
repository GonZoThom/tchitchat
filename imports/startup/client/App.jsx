import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import MyRoute        from '/imports/ui/components/MyRoute';
import Home           from '/imports/ui/modules/Home';
import Rooms          from '/imports/ui/modules/Rooms';
import Users          from '/imports/ui/modules/Users';
import Inscription    from '/imports/ui/modules/Account/Inscription';
import Connection     from '/imports/ui/modules/Account/Connection';
import Settings       from '/imports/ui/modules/Account/Settings';
import Missing        from '/imports/ui/modules/Account/Missing';
import Verify         from '/imports/ui/modules/Account/Verify';

const App = () => (
  <Router>
    <Switch>
      <MyRoute path="/home"           component={Home}                />
      <MyRoute path="/rooms/:id"      component={Rooms}        logged />
      <MyRoute path="/users/:id"      component={Users}        logged />
      <MyRoute path="/signup"         component={Inscription}         />
      <MyRoute path="/signin"         component={Connection}          />
      <MyRoute path="/settings"       component={Settings}     logged />
      <MyRoute path="/missing"        component={Missing}             />
      <MyRoute path="/verify/:token"  component={Verify}       logged />
    </Switch>
  </Router>
);

export default App;
