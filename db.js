const Sequelize = require("sequelize");
const PostModel = require("./models/Post");
require("dotenv").config();

// Creating the connection to the database [dbname, user, password]
const sequelize = new Sequelize(process.env.DATABASE_URL);

const Post = PostModel(sequelize, Sequelize);

sequelize.sync().then(() => {
  console.log(`Database created.`);
});

module.exports = {
  Post
};
