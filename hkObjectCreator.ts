import { braveHks } from "./braveHotkeys";
import { chromeHks } from "./chromeHotkeys";
import { firefoxHks } from "./WIPfirefoxHotkeys";

function createObject(hks: string) {
  let hkObj: { [key: string]: string } = {};

  // Create an object out of the shortcuts to quickly determine if the user inputs a valid hotkey
  hks.split("\n").forEach((line) => {
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
export const braveHksObj = createObject(braveHks);
export const firefoxHksObj = createObject(firefoxHks);
