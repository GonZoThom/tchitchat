import React, { useState, useCallback } from 'react';
import CustomInput from '/imports/ui/components/CustomInput';
import { Meteor } from 'meteor/meteor';

const CreateForm = ({ history }) => {
    const [name, setName] = useState("");

    const update = useCallback((e, { name, value }) => {
        if(name = "name")
            setName(value);
    }, [ setName ])

    const create = useCallback(() => {
        Meteor.call("rooms.create", { name }, (err) => {
            if (err)
                console.log(err);
        });
    }, [name]);

    return (
        <div>
            <h3>Créer un salon</h3>
            <CustomInput
                placeholder="Nom du salon"
                name="name"
                value={name}
                update={update}
            />
            <button onClick={create} >Créer Salon</button>
        </div>
    )
}

export default CreateForm;
