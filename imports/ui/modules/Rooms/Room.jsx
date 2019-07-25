import React from 'react';
import ManageRoomsForm from './ManageRoomsForm';
import { Link } from 'react-router-dom';

const Room = ({ room, userId, show }) => (
    <div>
        {(show) ? (
            <article className="roomLink">
                <h4>{room.name}</h4>
                {(room.ownerId === userId) ?
                <div>
                    <ManageRoomsForm roomId={room._id} modify='true' remove='true'/>
                </div>
                : "" }
                <Link to={`/rooms/${room._id}`}>
                    <button className="go-tchat">Let's tchat</button>
                </Link>
            </article>
        ) : "" }
    </div>
    );

export default Room;