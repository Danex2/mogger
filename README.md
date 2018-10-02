## Mogger

A web app that let's you view world of warcraft transmogs

Live link: https://mysterious-shelf-78900.herokuapp.com/view 

## Database file
Add a ``db.js`` to your root and fill in the information

```javascript
const Sequelize = require("sequelize");
const PostModel = require("./models/Post");

// Creating the connection to the database [dbname, user, password]
const sequelize = new Sequelize("moggerdb", "dbuser", "dbpassword", {
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const Post = PostModel(sequelize, Sequelize);

// Remove this if you don't want the database to be cleared every time you refresh
sequelize.sync({ force: true }).then(() => {
  console.log(`Database created.`);
});

module.exports = {
  Post
};
```

