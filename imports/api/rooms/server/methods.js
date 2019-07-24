import { Meteor } from 'meteor/meteor';
import Rooms from '..';

Meteor.methods({
  "rooms.create"({ name }) {
    if (!this.userId) {
      throw new Meteor.Error('403', 'Vous devez être un utilsateur vérifié pour créer un salon !');
    }
    
    Rooms.insert({
      name,
      ownerId: this.userId,
    });
  },

  "rooms.update"({ id, name }) {
    if (!this.userId) {
      throw new Meteor.Error('403', 'Vous devez être un utilsateur vérifié pour accèder à un salon !');
    }

    const room = Rooms.findOne(id);

    if (room.ownerId !== this.userId) {
      throw new Meteor.Error('403', 'Vous devez être propriétaire du salon pour le modifier !');
    }
    
    Rooms.update(id, { $set: { name } });
  },

  "rooms.remove"({ id }) {
    if (!this.userId) {
      throw new Meteor.Error('403', 'Vous devez être un utilsateur vérifié pour accèder à un salon !');
    }

    const room = Rooms.findOne(id);

    if (room.ownerId !== this.userId) {
      throw new Meteor.Error('403', 'Vous devez être propriétaire du salon pour le supprimer !');
    }

    Rooms.remove(id);
  },
});
