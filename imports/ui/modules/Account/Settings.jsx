import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

// console.log(userId);
const Settings = () => {
    return (
        <div>
            <h2>SETTINGS PAGE !</h2>
        </div>
    )
};

// export default Settings;
export default withTracker(() => ({
    userId: Meteor.userId(),
}))(Settings);