// for firefox
// from https://www.computerhope.com/shortcut/firefox.htm
// updated 5/9/23

const modifiers = ["Ctrl", "Shift", "Alt", "⌘", "Option"];
const modifierSet = new Set(modifiers);

// select all entries in the table
const nodes = document.body.querySelectorAll("td");

let rawContent = "";
let count = 0;

nodes.forEach((node) => {
  // start a new line for each table entry
  if (count % 2 === 0) {
    rawContent += `\n ${node.innerText}`;
  } else {
    // keep the command on the same line as the description
    rawContent += `: ${node.innerText}`;
  }
  count++;
});

// console.log(rawContent)

const lines = rawContent.split("\n");
let filteredContent = "";

const plusRegex = /[+]/g;

// loop thorough each line and filter out unnecessary entries
lines.forEach((line) => {
  const command = line.split(": ")[0]; // the command portion of each line
  if (command) {
    const commandPieces = command
      .split(" ")[1]
      .replace(plusRegex, " + ")
      .split(" ");
    const modifier = commandPieces[0]; // the first word/modifier of each command

    // change non-modifiers to lowercase. ex : Ctrl + A --> Ctrl + a
    commandPieces.forEach((piece, idx) => {
      if (!modifierSet.has(piece)) {
        commandPieces[idx] = piece.toLowerCase();
      }
    });

    if (modifierSet.has(modifier)) {
      filteredContent += `\n ${commandPieces.join(" ")}`; // add the entire line to filtered results if the command begins with one of the whitelisted modifiers
    }
  }
});

console.log(filteredContent);
