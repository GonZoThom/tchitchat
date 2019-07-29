import React, { useState, useCallback } from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';

import Fields from './Fields';

const Connexion = () => {
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
      <h1>Connexion</h1>
      <Fields
        update={update}
        state={{ username, password }}
      />
        <p>
          <button onClick={signin}>
            Se connecter
          </button>
          <Link to="signup">S'inscrire</Link>
        </p>
        <p>
          <Link to="missing">Mot de passe oublié ?</Link>
        </p>
    </section>
  </div>
  );
}

export default Connexion;
