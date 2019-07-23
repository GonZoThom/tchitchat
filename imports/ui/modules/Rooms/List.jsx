import React from 'react';
import CreateForm from './CreateForm';

const List = () => {
    // Create or Join a Room (Create can be another component)
    return (
        <div>
            <section>
                <button onClick={Meteor.logout}>Logout</button>
                <h2>ROOMS</h2>
                {/* <span><em>component 'Create'</em></span> */}
                <CreateForm />
                <h3>Mes Salons</h3>
                <span><em>Afficher les rooms propriétaires ou demander si email vérifié</em></span>
                <h3>Tous les Salons</h3>
            </section>
        </div>
    )
};

export default List;