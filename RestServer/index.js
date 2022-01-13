const express = require("express");
const test = require("./test");
const app = express();

app.use(express.json());
const parsedarray = [];

app.post("/", async (req, res) => {
  console.log("received post request");
  const inv = req.body.inv;

  let finalarray = [];
  for (let [key, value] of Object.entries(req.body.inv)) {
    for (let [key, item] of Object.entries(value)) {
        
    }
  }

  test(finalarray);
});

app.listen("6969", console.log("listening on port 6969"));
