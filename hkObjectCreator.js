import { braveHK } from "./braveHotkeys";
import { chromeHks } from "./chromeHotkeys";

function createObject(hkString) {
  let hkObj = {};

  // Create an object out of the shortcuts to quickly determine if the user inputs a valid hotkey
  hkString.split("\n").forEach((line) => {
    const shortcut = line.split(":");

    const description = shortcut[0].trim();
    const hotkey = shortcut[1].trim();

    if (hotkey.includes("or")) {
      // Create multiple entries for shortcuts that have multiple hotkeys
      const hotkeyVariants = hotkey.split("or");

      hotkeyVariants.forEach(
        (variant) => (hkObj[variant.trim()] = description)
      );
    } else {
      hkObj[hotkey] = description;
    }
  });
  return hkObj;
}

export const chromeHksObj = createObject(chromeHks);
export const braveHksObj = createObject(braveHK);
