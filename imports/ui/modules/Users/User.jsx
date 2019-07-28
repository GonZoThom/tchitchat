import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ name }) => (
    <div>
        <article className="roomLink">
            <h4>{name}</h4>
            <Link to={`/users`}>
                <button className="go-tchat">Retour liste</button>
            </Link>
        </article>
    </div>
    );

export default User;