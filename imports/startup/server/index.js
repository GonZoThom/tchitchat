import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import '/imports/api/messages/server/';
import '/imports/api/rooms/server/';

Accounts.config({
    sendVerificationEmail: true
});

Accounts.emailTemplates.verifyEmail = {
    subject() {
        return "Activate your account now!";
    },
    text(user, url) {
        console.log(url);
        url = url.replace('/#/verify-email', '/verify');
        console.log(url);
        return `Hey ${user.username}! Verify your e-mail by following this link: ${url}`;
    }
};

Meteor.publish("allUsers", function () {
    return Meteor.users.find({}).fetch();
});

Meteor.startup(() => {});
