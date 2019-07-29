import React from 'react';
import { Link } from 'react-router-dom';

const PrivateChat = () => {
    return (
        <div>
            <h2>PrivateChat PAGE !</h2>
        <p>
            <Link to={`/users`}>
                <button>Retour liste</button>
            </Link>
        </p>
        </div>
    )
};

export default PrivateChat;