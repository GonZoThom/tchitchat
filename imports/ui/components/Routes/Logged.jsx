import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Route, Redirect } from 'react-router-dom';

const Logged = ({ path, component, userId }) => {
    console.log(userId);
    
    if (!userId) {
        return <Redirect to="/" />
    }
    return <Route path={path} component={component} />
};

export default withTracker(() => ({
    userId: Meteor.userId(),
}))(Logged);