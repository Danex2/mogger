const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const posts = require('./routes/api/posts');
const view = require('./routes/api/view');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/', posts);
app.use('/api/', view);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Running on Port: ${port}`);
});
