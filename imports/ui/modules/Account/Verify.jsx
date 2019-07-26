import React from 'react';
// import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
// import { withTracker } from 'meteor/react-meteor-data';

const Verify = (props) => {
    const token = props.match.params.token;

    const checkMail = () => {
        Accounts.verifyEmail(token, function (err) {
            if (err != null) {
                console.log(err.message);
            } else {
                console.log('Thank you! Your email address has been confirmed.')
            }
        });
    };

    return (
        <div>
            <p>Vérifier votre E-mail avant de pouvoir créer un salon => 
                <button onClick={checkMail}>VERIFIER</button>
            </p>
        </div>
    )
};

export default Verify;