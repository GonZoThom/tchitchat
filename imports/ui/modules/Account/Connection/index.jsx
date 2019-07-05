import React, { useState, useCallback } from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';

import Fields from './Fields';

const Connection = () => {
  const [ password, setPassword ] = useState("");
  const [ username, setUsername ] = useState("");

  const update = useCallback((e, { name, value }) => {
    switch(name) {
      case 'password':
        setPassword(value);
        break;
      case 'username':
        setUsername(value);
        break;
    }
  }, [ setPassword, setUsername ]);

  const signin = useCallback(() => {
    Meteor.loginWithPassword(username, password, (err) => {
      if (err)
        console.log(err);
    });
  }, [ username, password ]);

  return (
  <div>
    <section>
      <h1>Connection</h1>
      <Fields
        update={update}
        state={{ username, password }}
      />
      <button
        onClick={signin}
      >Sign In
    </button>
      <Link to="/signup">Inscription</Link>
    </section>
  </div>
  );
}

export default Connection;
