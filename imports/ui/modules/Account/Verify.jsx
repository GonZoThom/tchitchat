import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { withTracker } from 'meteor/react-meteor-data';

const Verify = () => {
    const user = Meteor.user();

    // Checking - Debug
    // console.log(Meteor.userId());    
    // console.log(Meteor.user());
    // console.log(`user mail : ${userEmail}`);  

    // const verifyEmail = () => {
    //     Accounts.sendVerificationEmail();
    // };

    return (
        <div>
            <p>Vérifier votre E-mail avant de pouvoir créer un salon => 
                {/* <button onClick={verifyEmail}>VERIFIER</button> */}
            </p>
        </div>
    )
};

export default withTracker(() => ({
    userId: Meteor.userId(),
    user: Meteor.user(),
}))(Verify);