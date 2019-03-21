const mongodb = require('mongodb')
const getdb = require('../util/database').getDb;

const ObjectId = mongodb.ObjectID;

class User {
constructor(username,email) {
  this.name = username;
  this.email = email;
}

save() {
  const db = getdb();
  return db.collection('users').insertOne(this);
}
 static findById(userId) {
  const db =getdb();
  return db.collection('user').findOne({_id:new ObjectId(userId)})
 }
}
module.exports = User;