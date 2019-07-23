import React from 'react';

const Room = ({ room, show}) => (
    <div>
        {(show) ? (
            <article className="roomLink">
                <h4>{room.name}</h4>
                <div>
                    <button
                        id={room._id}
                    // onClick={remove}
                    >
                        Supprimer
                    </button>
                    <button
                        id={room._id}
                    // onClick={remove}
                    >
                        Modifier
                    </button>
                </div>
            </article>
        ) : "" }
    </div>
    );

export default Room;