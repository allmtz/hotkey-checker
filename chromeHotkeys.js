import { chromeHk } from "./WIPchormeHotkeys";

let chromeHksObj = {};

// Create an object out of the shortcuts to quickly determine if the user inputs a valid hotkey
chromeHk.split("\n").forEach((line) => {
  const shortcut = line.split(": ");

  const description = shortcut[0];
  const hotkey = shortcut[1];

  chromeHksObj[hotkey] = description;
});

export default chromeHksObj;
