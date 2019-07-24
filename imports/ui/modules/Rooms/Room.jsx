import React from 'react';
import ManageRoomsForm from './ManageRoomsForm';
import { Link } from 'react-router-dom';

const Room = ({ room, userId, show }) => (
    <div>
        {(show) ? (
            <article className="roomLink">
                <p><h4>{room.name}</h4>
                    <Link to={`/rooms/${room._id}`}>
                        <button>go to the chat</button>
                    </Link>
                </p>
                {(room.ownerId === userId) ?
                <div>
                    <ManageRoomsForm roomId={room._id} modify='true' remove='true'/>
                </div>
                : "" }
            </article>
        ) : "" }
    </div>
    );

export default Room;