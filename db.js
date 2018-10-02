const Sequelize = require("sequelize");
const PostModel = require("./models/Post");
require("dotenv").config();

// Creating the connection to the database [dbname, user, password]
const sequelize = new Sequelize(
  process.env.DB_TABLE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_IP,
    dialect: "postgres",
    port: 5432,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

const Post = PostModel(sequelize, Sequelize);

sequelize.sync().then(() => {
  console.log(`Database created.`);
});

module.exports = {
  Post
};
