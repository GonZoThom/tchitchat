import React from 'react';
import PrivateChat from './PrivateChat';
import UsersList from './UsersList';

const Users = (props) => {
    const {
        match: {
            params: {
                id
            }
        }
    } = props;
    // Sinon sans déconstruction :
    // console.log(props.match.params.id);
    
    return (
        // On test si la route a un id et on affiche en fonction.
        (id !== undefined ? 
            <PrivateChat chatId={id} /> 
        : 
            <UsersList />
        )
    )
};

export default Users;