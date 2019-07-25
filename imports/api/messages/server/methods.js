import { Meteor } from 'meteor/meteor';
import Messages from '..';

Meteor.methods({
  "messages.create"({ room_id, text }) {
    if (!this.userId) {
      throw new Meteor.Error('403', 'Vous devez être connecté pour envoyer un message !');
    }
    
    Messages.insert({
      userId: this.userId,
      room_id,
      text,
      createdAt: new Date(),
    });
  },
});
