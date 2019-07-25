import React from 'react';

const Message = ({ text, user }) => (
        <div className="msgTxt">
            <p>{text}</p>
            <small>{user.username}</small>
        </div>
    );

export default Message;