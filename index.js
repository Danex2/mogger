const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

const posts = require("./routes/api/posts");
const view = require("./routes/api/view");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/", posts);
app.use("/api/", view);

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("mogger-front/build"));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "mogger-front", "build", "index.html")
    );
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Running on Port: ${port}`);
});
