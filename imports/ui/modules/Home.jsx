import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

const Home = () => {    
    console.log(userId);
    return (
        <div>
            <h2>THIS IS A LANDING PAGE !</h2>
        </div>
    )
};

export default withTracker(() => ({
    userId: Meteor.userId(),
}))(Home);