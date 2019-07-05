import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

// console.log(userId);
const Home = () => {    
    return (
        <div>
            <h2>THIS IS A LANDING HOME PAGE !</h2>
        </div>
    )
};

// export default Home;
export default withTracker(() => ({
    userId: Meteor.userId(),
}))(Home);