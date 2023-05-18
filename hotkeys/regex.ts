// - standard names and casings:
// Shift
// Meta for Command & Windows key
// Control
// Alt for Option
// Tab
// ArrowRight/Left/Up/Down
// Enter

const regex = {
  control: /Ctrl|control/g,
  shift: /shift/g,
  option: /Option|option/g,
  command: /Command|⌘|command/g,
  tab: /tab/g,
  rightArrow: /Right arrow|→/g,
  leftArrow: /Left arrow|←/g,
  upArrow: /Up arrow|↑/g,
  downArrow: /Down Arrow|↓/g,
  pageUp: /page up|PgUp/g,
  pageDown: /page down|PgDn/g,
};

const replacements = {
  control: "Control",
  shift: "Shift",
  option: "Alt",
  command: "Meta",
  tab: "Tab",
  rightArrow: "ArrowRight",
  leftArrow: "ArrowLeft",
  upArrow: "ArrowUp",
  downArrow: "ArrowDown",
  pageUp: "PageUp",
  pageDown: "PageDown",
};

const standardize = (s: string) => {
  return s
    .replace(regex.control, replacements.control)
    .replace(regex.option, replacements.option)
    .replace(regex.command, replacements.command)
    .replace(regex.tab, replacements.tab)
    .replace(regex.upArrow, replacements.upArrow)
    .replace(regex.downArrow, replacements.downArrow)
    .replace(regex.leftArrow, replacements.leftArrow)
    .replace(regex.rightArrow, replacements.rightArrow)
    .replace(regex.pageUp, replacements.pageUp)
    .replace(regex.pageDown, replacements.pageDown)
};

export { standardize };
