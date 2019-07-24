import React from 'react';

const Room = ({ room, userId, show }) => (
    <div>
        {(show) ? (
            <article className="roomLink">
                <h4>{room.name}</h4>
                {(room.ownerId === userId) ?
                <div>
                    <button
                        id={room._id}
                    > Supprimer
                    </button>
                    <button
                        id={room._id}
                    >  Modifier
                    </button>
                </div>
                : "" }
            </article>
        ) : "" }
    </div>
    );

export default Room;