import React from 'react';
import ManageRoomsForm from './ManageRoomsForm';

const Room = ({ room, userId, show }) => (
    <div>
        {(show) ? (
            <article className="roomLink">
                <h4>{room.name}</h4>
                {(room.ownerId === userId) ?
                <div>
                    <ManageRoomsForm roomId={room._id} modify='true' remove='true'/>
                    {/* <button
                        roomId={room._id}
                    > Supprimer
                    </button>
                    <button
                        roomId={room._id}
                    >  Modifier
                    </button> */}
                </div>
                : "" }
            </article>
        ) : "" }
    </div>
    );

export default Room;