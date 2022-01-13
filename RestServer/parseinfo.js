module.exports = (itemsarray) => {
  for (let i = 0; i < itemsarray.length; i++) {
    let element = itemsarray[i];
    if (typeof itemsarray != "object") return console.log("item not object");
  }
};
