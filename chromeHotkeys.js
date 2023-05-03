// TODO
// format raw HKs here? if so ==> "command" needs to be changed to "Meta" & "option" needs to be changed to "Alt"

import { chromeHk } from "./WIPchormeHotkeys";

let chromeHksObj = {};

// Create an object out of the shortcuts to quickly determine if the user inputs a valid hotkey
chromeHk.split("\n").forEach((line) => {
  const shortcut = line.split(":");

  const description = shortcut[0].trim();
  const hotkey = shortcut[1].trim();

  if (hotkey.includes("or")) {
    // Create multiple entries for shortcuts that have multiple hotkeys
    const hotkeyVariants = hotkey.split("or");

    hotkeyVariants.forEach(
      (variant) => (chromeHksObj[variant.trim()] = description)
    );
  } else {
    chromeHksObj[hotkey] = description;
  }
});

export default chromeHksObj;
