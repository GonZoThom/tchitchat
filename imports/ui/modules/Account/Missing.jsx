import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

const Missing = ({ match, user, email, userMail, mail, history }) => {
    // const token = match.params.token;
    
    console.log('userMail : ' + userMail);
    console.log('user : ' + user);
    console.log('email : ' + email);
    // console.log(email.map(mail =>{
    //     mail.address;
    // }));

    const forgotMyPassword = () => {
        Accounts.forgotPassword(email, function (err) {
            if (err != null) {
                console.log(err.message);
            } else {
                console.log('Thank you! Your password has been sent by mail.');
            }
        });
    };

    return (
        <div>
            <p>Retrouver mon mot de passe oublié :
                {/* <button onClick={forgotMyPassword}>ENVOYER</button> */}
            </p>
            {/* {emails.map(email =>{
                <span>{email.address}</span>;
            })} */}
        </div>
    )
};

export default withTracker(() => {
    const user = Meteor.user() || {};
    const userMail = Meteor.user() || { emails: [{}] };
    // const mail = Meteor.user().emails[0].address;
    const email = Meteor.users.findOne({
         _id: Meteor.userId()}, { fields: {emails: 1} });
    return {
        userId: Meteor.userId(),
        user, email, userMail
        // email: user[0].emails.address,
    }
})(Missing);