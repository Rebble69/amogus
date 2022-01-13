const express = require("express");
const app = express();
const { events } = require("../event/mainemitter");

app.use(express.json());
// names like this just to make dq json return names

app.post("/", async (req, res) => {
  let parsedarray = { helmet: [], chest: [], weapon: [], ability: [] };
  console.log("received post request");
  const inv = req.body.inv;

  if (!inv) {
    return console.log("inventory empty");
  }

  for (let [key, v] of Object.entries(req.body.inv)) {
    if (key == "keys") break;
    for (let [key, value] of Object.entries(v)) {
      let catagory_parsed_string = key.split("_")[0];
      parsedarray[catagory_parsed_string].push(value);
    }
  }
  events.emit("invParsed", parsedarray);
});

app.listen(6969, console.log("listening on port 6969"));
