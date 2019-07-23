import { Meteor } from 'meteor/meteor';
import Rooms from '..';

Meteor.publish('rooms.all', () => {
  return Rooms.find({}, {
    // sort: { createdAt: -1 },
    // limit: 20,
  });
});
