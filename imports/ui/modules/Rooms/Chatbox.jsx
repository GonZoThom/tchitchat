import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

// Import Collections
import Messages from '/imports/api/messages';

// Import Components & Template for Messages
import Loader from '/imports/ui/components/Loader';
import MessageForm from './MessageForm';
import Message from './Message';

const Chatbox = ({ user, userId, roomId, loading, messages }) => {
    return (
        <section className="chatbox">
            <div>
                <h1>Bienvenue dans le salon : "Insérer le nom de la room quand je serais moins con !!!!!!!!!!!!!!!!!"</h1>
                <h2>Hello {user.username} !</h2>
                <button onClick={Meteor.logout}>
                    Logout
                </button>
            </div>
            <Loader
                loading={loading}
                render={messages.map(msg =>
                    <Message
                        key={msg._id}
                        owner={msg.userId}
                        text={msg.text}
                    />
                )}
            />
            <MessageForm roomId={roomId} />
        </section>
    );
}

export default withTracker(({ roomId }) => {
    const messagesPublication = Meteor.subscribe('messages.lasts');
    const loading = !messagesPublication.ready();
    const messages = Messages.find({ room_id: roomId }).fetch();
    return {
        userId: Meteor.userId(),
        user: Meteor.user() || {},
        loading,
        messages,
    }
})(Chatbox);
