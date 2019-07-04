import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import MyRoute from '/imports/ui/components/MyRoute';
import Connection from '/imports/ui/modules/Connection';
import Inscription from '/imports/ui/modules/Inscription';
import Chatbox from '/imports/ui/modules/Chatbox';
import Profil_user from '/imports/ui/modules/Profil_user';
import Verif_user from '/imports/ui/modules/Verif_user';
import Rooms from '/imports/ui/modules/Rooms';

const App = () => (
  <Router>
    <Switch>
      <MyRoute path="/home" component={Rooms} logged />
      <MyRoute path="/signup" component={Inscription} />
      <MyRoute path="/signin" component={Connection} />
    </Switch>
  </Router>
);

export default App;
