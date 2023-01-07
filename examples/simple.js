const { Keycheck, keycheck } = require("../index.js");

while (1) {
  switch (keycheck()) {
    case Keycheck.KEY_VOLUMEUP:
      console.log("Pressed volume up");
      break;
    case Keycheck.KEY_VOLUMEDOWN:
      console.log("Pressed volume down");
      break;
  }
}
