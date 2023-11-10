const User = require("./User");
const Note = require("./Note");
const Video = require("./Video");
const Like = require("./Like");
const Book = require("./Book");

User.hasMany(Note, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Note.belongsTo(User, {
  foreignKey: "user_id",
});
User.hasMany(Video, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Video.belongsTo(User, {
  foreignKey: "user_id",
});
User.hasMany(Book, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Book.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Note, Video, Like, Book };
