const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors");
const db = require("./app/models");
const indexRouter = require("./app/routes/routes");

var corsOptions = {
  origin: "http://localhost:3000"
};

const app = express()
const port = 3000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', indexRouter);
app.use(cors(corsOptions));

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})