// for Chrome
const modifiers = ["Ctrl", "Shift", "Alt", "⌘", "Option"];
const modifierSet = new Set(modifiers);

// working on downloading a results file straight from the browser
// const a = document.createElement("a");
// a.download = "sucess";
// a.id = "downloadAnchor";
// document.body.appendChild(a);

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

const lines = rawContent.split("\n");
let filteredContent = "";

// loop thorough each line and filter out unnecessary entries
lines.forEach((line) => {
  const command = line.split(": ")[1]; // the command portion of each line
  if (command) {
    const modifier = command.split(" ")[0]; // the first word/modifier of each command
    if (modifierSet.has(modifier)) {
      filteredContent += `\n ${line}`; // add the entire line to filtered results if the command begins with one of the whitelisted modifiers
    }
  }
});

console.log(filteredContent);
