import React from 'react';
import { Meteor } from "meteor/meteor";

const Message = ({ text, owner }) => {
    const ownerMSG = Meteor.users.findOne({ _id: owner }, { fields: { username: 1 } });

    return(    
        <div className="msgTxt">
            <p>{text}</p>
            <small>{ownerMSG.username}</small>
        </div>
    );}

export default Message;