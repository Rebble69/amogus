var fs = require("fs"),
  request = require("request");
const fetch = require("node-fetch");
const { events } = require("./event/mainemitter");
//save image

const download = async (assetid) => {
  return await fetch(
    `https://assetdelivery.roblox.com/v1/asset?id=${assetid}`,
    {}
  );
};

async function pog(id, imagenane) {
  const result = await download(id);
  result.body.pipe(fs.createWriteStream("./images/" + imagenane));
}
pog();

events.on("invParsed", (parsedarray) => {
  parsedarray.ability.forEach(async (element) => {
    let imageid = element.imageId;
    if (imageid.startsWith("http")) {
      imageid = element.imageId.split("=")[1];
    } else {
      imageid = element.imageId.split("/")[2];
    }
    await pog(imageid, `${imageid}_test.png`);
  });
  parsedarray.weapon.forEach(async (element) => {
    let imageid = element.imageId;
    if (imageid.startsWith("http")) {
      imageid = element.imageId.split("=")[1];
    } else {
      imageid = element.imageId.split("/")[2];
    }
    await pog(imageid, `${imageid}_test.png`);
  });
  parsedarray.chest.forEach(async (element) => {
    let imageid = element.imageId;
    if (imageid.startsWith("http")) {
      imageid = element.imageId.split("=")[1];
    } else {
      imageid = element.imageId.split("/")[2];
    }
    await pog(imageid, `${imageid}_test.png`);
  });
  parsedarray.helmet.forEach(async (element) => {
    let imageid = element.imageId;
    if (imageid.startsWith("http")) {
      imageid = element.imageId.split("=")[1];
    } else {
      imageid = element.imageId.split("/")[2];
    }
    await pog(imageid, `${imageid}_test.png`);
  });
});
