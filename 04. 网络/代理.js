var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());
app.post("/api/user/login", function (req, res) {
  res.send(
    JSON.stringify({
      code: 0,
      data: req.body,
    })
  );
});

app.listen(3000);
