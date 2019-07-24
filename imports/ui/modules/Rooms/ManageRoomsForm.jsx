import React, { useState, useCallback } from 'react';
import { Meteor } from 'meteor/meteor';

const ManageRoomsForm = ({ create, modify, remove, roomId }) => {
    const [name, setName] = useState("");

    const update = useCallback((e, { name, value }) => {
        if(name = "name")
            setName(value);
    }, [ setName ]);

    const createRoom = useCallback(() => {
        Meteor.call("rooms.create", { name }, (err) => {
            if (err)
                console.log(err);
        });
    }, [name]);

    const modifyRoom = useCallback(() => {
        Meteor.call("rooms.update", { id: roomId, name: name }, (err) => {
            if (err)
                console.log(err);
        });
    }, [name]);

    const removeRoom = useCallback(() => {
        Meteor.call("rooms.remove", { id: roomId }, (err) => {
            if (err)
                console.log(err);
        });
    });

    return (
        <div>
            <input  type="text" 
                    name="name"
                    value={name} 
                    placeholder="Nom du salon"
                    update={this.update}
                    onChange={(e) =>
                        update(e, e.target || {})
                    }/>
            {(create) ? <button onClick={createRoom} >Créer Salon </button> : null}
            {(modify) ? <button onClick={modifyRoom} >Modifier    </button> : null}
            {(remove) ? <button onClick={removeRoom} >Supprimer   </button> : null}
        </div>
    )
}

export default ManageRoomsForm;
