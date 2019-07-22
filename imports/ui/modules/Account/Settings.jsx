import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

const Settings = () => {
    return (
        <div>
            <h2>SETTINGS PAGE !</h2>
        </div>
    )
};

export default withTracker(() => ({
    userId: Meteor.userId(),
}))(Settings);