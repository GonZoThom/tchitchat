import React from 'react';

const RoomLink = ({ room, userId, remove }) => (
    <article className="roomLink">
        <h3>{room.name}</h3>
        {(room.userId === userId) && (
            <div>
                <button
                    id={room._id}
                    onClick={remove}>
                    Supprimer
                </button>
                <button
                    id={room._id}
                    // onClick={remove}
                    >
                    Modifier
                </button>
            </div>
        )}
    </article>
);

export default RoomLink;