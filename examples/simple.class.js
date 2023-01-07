const { Keycheck } = require("../index.js");

const mybutton = new Keycheck();

while (1) {
  const state = mybutton.check();
  if (state.value() != 0) {
    switch (state.code()) {
      case ButtonEvent.KEY_VOLUMEUP:
        console.log("Pressed volume up");
        break;
      case ButtonEvent.KEY_VOLUMEDOWN:
        console.log("Pressed volume down");
        break;
    }
  }
}
