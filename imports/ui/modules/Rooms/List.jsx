import React from 'react';
import CreateForm from './CreateForm';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import Rooms from '/imports/api/rooms';

import Loader from '/imports/ui/components/Loader';
import Room from './Room';

const List = ({ user, userId, loading, rooms }) => {

    // const remove = useCallback(({ target: { id } }) => {
    //     Meteor.call('rooms.remove', { id }, (err) => {
    //         if (err) console.log(err+"BONJOUR");
    //     });
    // }, []);

    return (
        <div>
            <section>
                <button onClick={Meteor.logout}>Logout</button>
                <h2>ROOMS</h2>
                <p>Bienvenue sur Tchitchat <span>{user.username}</span></p>
                <CreateForm />
                <h3>Mes Salons</h3>
                    <Loader
                        loading={loading}
                        render={rooms.map(room =>
                            <Room
                                key={room._id}
                                userId={userId}
                                room={room}
                                show={(room.ownerId === userId) ? true : false}
                            />
                        )}
                    />
                <h3>Tous les Salons</h3>
                <Loader
                    loading={loading}
                    render={rooms.map(room =>
                        <Room
                            key={room._id}
                            room={room}
                            show={(room.ownerId === userId) ? false : true}
                        />
                    )}
                />
            </section>
        </div>
    )
};

export default withTracker(() => {
    const roomsPublication = Meteor.subscribe('rooms.all');
    const loading = !roomsPublication.ready();
    const rooms = Rooms.find().fetch();
    return {
        userId: Meteor.userId(),
        user: Meteor.user() || {},
        loading,
        rooms,
    }
})(List);