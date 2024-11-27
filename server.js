require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/initiate", require("./lib/initiate"));

app.get("/refresh", require("./lib/refresh"));

app.get("/oauth/callback", require("./lib/callback"));


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
