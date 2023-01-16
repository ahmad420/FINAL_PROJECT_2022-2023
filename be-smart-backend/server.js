const express = require("express");
const app = express();
const port = 5000;
app.get("/apLab - Observe DNS Resolutioni", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});
app.listen(port, () => {
  console.log("Server started on port " + port);
});
