import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Loader from '/imports/ui/components/Loader';

// Template for one User:
import User from "./User";

const UsersList = ({ users, loading, userId }) => {
    // console.log("loading : "+loading);
        
    return (
        <div>
            <section>
                <button onClick={Meteor.logout}>Logout</button>
                <h3>USERS LIST</h3>
                {users.map(user =>
                    <span>{user.username}<br /></span>
                )}
                {/* <Loader
                    loading={loading}
                    render={users.map(user =>
                        <User
                            key={user._id}
                            name={user.username}
                        />
                    )}
                /> */}
            </section>
        </div>
    )
};

export default withTracker(() => {
    // const usersPublication = Meteor.subscribe('allUsers');
    // const loading = !usersPublication.ready();
    return {
        userId: Meteor.userId(),
        users: Meteor.users.find({ }).fetch(),
        // loading,
    }
})(UsersList);