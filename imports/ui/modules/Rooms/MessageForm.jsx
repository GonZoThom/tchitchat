import React, { useState, useCallback } from 'react';
import { Meteor } from 'meteor/meteor';

const MessageForm = ({ roomId }) =>{
    const [text, setText] = useState("");

    const clearState = () => {
        setText("");
    };
    

    const update = useCallback((e, { name, value }) => {
        if (name = "text")
            setText(value);
    });

    const send = useCallback(() => {
        Meteor.call("messages.create", { room_id: roomId, text: text }, (err) => {
            if (err)
            console.log(err);
        });
        clearState();
    }, [ text ]);

    return (
        <section>
            <input 
                id="msgInput"
                type="textarea"
                name="text"
                value={text}
                placeholder="Ecrivez votre message ici..."
                onChange={(e) =>
                    update(e, e.target || {})
                }/>
            <button onClick={send}>Envoyer</button>
        </section>
    )
};

export default MessageForm;