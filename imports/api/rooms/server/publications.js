import { Meteor } from 'meteor/meteor';
import Rooms from '..';

Meteor.publish('Rooms.lasts', () => {
  return Rooms.find({}, {
    // sort: { createdAt: -1 },
    // limit: 50,
  });
});
