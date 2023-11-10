const User = require("./User");
const Note = require("./Note");
const Video = require("./Video");
const Like = require("./Like");
const Song = require("./Song");

//FREIDA
const Book = require("./Book");
//------------------------

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

User.hasMany(Song, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Song.belongsTo(User, {
  foreignKey: "user_id",
});

Song.hasMany(Like, {
  foreignKey: "song_id",
});
Like.belongsTo(Song, {
  foreignKey: "song_id",
});
User.hasMany(Like, { foreignKey: "user_id" });
Like.belongsTo(User, { foreignKey: "user_id" });

//FREIDA
User.hasMany(Book, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Book.belongsTo(User, {
  foreignKey: "user_id",
});
//------------------------

module.exports = { User, Note, Video, Like, Song };
