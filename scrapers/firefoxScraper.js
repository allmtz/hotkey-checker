//  for https://support.mozilla.org/en-US/kb/keyboard-shortcuts-perform-firefox-tasks-quickly#firefox:mac:fx114

// TODO
// for "control + shift + tab", need to change index.js to run a search when max modifiers are reached. currently just clearing input

const modifiers = [
  "Ctrl",
  "Shift",
  "Alt",
  "Option",
  "command",
  "control",
  "shift",
  "option",
];
const modifierSet = new Set(modifiers);

// select all entries in the table
const trs = document.body.querySelectorAll("tr");

let rawContent = "";
let count = 0;

trs.forEach((tr) => {
  const tds = tr.querySelectorAll("td");
  const hk = tds[1];

  if (tr.querySelector("td")) {
    // remove newline characters
    const description = tds[0].innerText.replace(/[\n\r]/g, "");

    // in case there is more than one hotkey option
    const hkVariants = hk.innerText.replace("*", "").split("\n");

    hkVariants.forEach((variant) => {
      if (variant.trim() === "") {
        return;
      } else if (variant === "command + 1 to 8") {
        for (let i = 1; i <= 8; i++) {
          rawContent += `${description} : command + ${i}\n`;
        }
      } else {
        rawContent += `${description} : ${variant}\n`;
      }
    });
  }
});

const lines = rawContent.split("\n");
let filteredContent = "";

// loop thorough each line and filter out unnecessary entries
lines.forEach((line) => {
  const command = line.split(": ")[1]; // the command portion of each line
  const description = line.split(" :")[0];

  if (command) {
    const commandPieces = command.split(" ");
    const modifier = commandPieces[0]; // the first word/modifier of each command

    // change non-modifiers to lowercase. ex : Ctrl + A --> Ctrl + a
    commandPieces.forEach((piece, idx) => {
      if (!modifierSet.has(piece)) {
        commandPieces[idx] = piece.toLowerCase();
      }
    });

    if (modifierSet.has(modifier)) {
      filteredContent += `\n ${description} : ${commandPieces.join(" ")}`; // add the entire line to filtered results if the command begins with one of the whitelisted modifiers
    }
  }
});

console.log(filteredContent);
