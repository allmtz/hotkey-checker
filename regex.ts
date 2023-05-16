// - standard names and casings:
// Shift
// Meta for Command & Windows key
// Control
// Alt for Option
// Tab
// ArrowRight/Left/Up/Down
// Enter

const regex = {
  control: /Ctrl/g,
  option: /Option/g,
  command: /Command|⌘/g,
  rightArrow: /Right arrow|→/g,
  leftArrow: /Left arrow|←/g,
  upArrow: /Up arrow/g,
  downArrow: /Down Arrow|↓/g,
};

const replacements = {
  control: "Control",
  option: "Alt",
  command: "Meta",
  rightArrow: "ArrowRight",
  leftArrow: "ArrowLeft",
  upArrow: "ArrowUp",
  downArrow: "ArrowDown",
};

const standardize = (s: string) => {
  return s
    .replace(regex.control, replacements.control)
    .replace(regex.option, replacements.option)
    .replace(regex.command, replacements.command)
    .replace(regex.upArrow, replacements.upArrow)
    .replace(regex.downArrow, replacements.downArrow)
    .replace(regex.leftArrow, replacements.leftArrow)
    .replace(regex.rightArrow, replacements.rightArrow);
};

export { standardize };
