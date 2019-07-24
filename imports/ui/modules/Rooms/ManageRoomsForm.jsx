import React, { useState, useCallback } from 'react';
import { Meteor } from 'meteor/meteor';

const ManageRoomsForm = ({ create, modify, remove, userId }) => {
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
        Meteor.call("rooms.update", { userId, name }, (err) => {
            if (err)
                console.log(err);
        });
    }, [name]);

    return (
        <div>
            <h3>Créer un salon</h3>
            <input  type="text" 
                    placeholder="Nom du salon"
                    name="name"
                    update={this.update}
                    value={name} 
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
