import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Chatbox from './Chatbox';
import List from './List';

const Rooms = (props) => {
    const {
        match: {
            params: {
                roomId
            }
        }
    } = props;
    // Sinon sans déconstruction :
    // console.log(props.match.params.roomId);
    
    return (
        // On test si l'Id est definit et on affiche en fonction.
        ( roomId !== undefined ? <Chatbox /> : <List/>)
    )
};

export default withTracker(() => ({
    userId: Meteor.userId(),
}))(Rooms);;