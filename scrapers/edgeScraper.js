// for https://support.microsoft.com/en-us/microsoft-edge/keyboard-shortcuts-in-microsoft-edge-50d3edab-30d9-c7e4-21ce-37fe2713cfad#ID0EBD=Mac
// Mac and Windows

const modifiers = ["Ctrl", "Shift", "Alt", "Command", "Option"];
const modifierSet = new Set(modifiers);

// select all entries in the table
const nodes = document.body.querySelectorAll("tbody td p");

let rawContent = "";
let count = 0;

nodes.forEach((node) => {
  // start a new line for each table entry
  if (count % 2 === 0) {
    rawContent += `\n ${node.innerText.trim()}`;
  } else {
    // keep the command on the same line as the description
    rawContent += ` : ${node.innerText.trim()}`;
  }
  count++;
});

const lines = rawContent.split("\n");
let filteredContent = "";

// loop thorough each line and filter out unnecessary entries
lines.forEach((line) => {
  const command = line.trim().split(": ")[0]; // the command portion of each line
  const description = line.split(" :")[1];

  if (description && description.trim() === "Switch to a specific tab") {
    for (let i = 1; i <= 8; i++) {
      filteredContent += `\n ${description} : ${
        command.includes("Ctrl") ? "Ctrl" : "Command"
      } + ${i} `;
    }
  } else if (command) {
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
