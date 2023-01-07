const { Keycheck } = require("../index.js");
const fs = require("fs");

const mybutton = new Keycheck();

while (1) {
  const state = mybutton.check();
  const brightness = 128;
  const toggle = fs.readFileSync("/sys/class/leds/led:switch_0/brightness", "utf8");
  if (state.value() != 0) {
    switch (state.code()) {
      case Keycheck.KEY_VOLUMEUP:
        switch (toggle.trim()) {
          case "0":
            fs.writeFileSync("/sys/class/leds/led:torch_0/brightness", String(brightness));
            fs.writeFileSync("/sys/class/leds/led:switch_0/brightness", "1");
            break;
          case "1":
            fs.writeFileSync("/sys/class/leds/led:torch_0/brightness", "0");
            fs.writeFileSync("/sys/class/leds/led:switch_0/brightness", "0");
            break;
        }
        break;
    }
  }
}
