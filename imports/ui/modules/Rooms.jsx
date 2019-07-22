import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

const Rooms = () => {
    return (
        <div>
            <h2>My Rooms ;</h2>
            <h2>The Rooms I'm in ;</h2>
        </div>
    )
};

export default withTracker(() => ({
    userId: Meteor.userId(),
}))(Rooms);;