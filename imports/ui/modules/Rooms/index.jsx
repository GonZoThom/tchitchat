import React from 'react';
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
        // On test si la route a un id et on affiche en fonction.
        (roomId !== undefined ? 
            <Chatbox roomId={roomId} /> 
        : 
            <List />
        )
    )
};

export default Rooms;