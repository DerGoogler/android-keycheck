const ButtonEvent = require("./index.js")

const mybutton = new ButtonEvent()

while (1) {
    switch (mybutton.check()) {
        case ButtonEvent.KEY_VOLUMEUP:
            console.log("Pressed volume up")
            break;
        case ButtonEvent.KEY_VOLUMEDOWN:
            console.log("Pressed volume down")
            break;
    }
}