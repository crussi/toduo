Meteor.publish('publicLists', function() {
  return Lists.find({userId: {$exists: false}});
});

Meteor.publish('privateLists', function() {
  if (this.userId) {
    return Lists.find({userId: this.userId});
  } else {
    this.ready();
  }
});

Meteor.publish('todos', function(listId) {
  check(listId, String);

  return Todos.find({listId: listId});
});

Meteor.publish('todos2', function(userId) {
  check(userId, String);

  return Inbox.find({userId: userId});

  //return Inbox.find({userId: this.userId()});
  //return Inbox.find({userId: 'GTMXs9Xjwfs6NBA7t'});
});
