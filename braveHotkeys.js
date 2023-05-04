// filtered Brave shortcuts
const beforeRegex = `Open a new window: Ctrl + n
Open a new window in Private mode: Ctrl + Shift + n
Open a new tab, and jump to it: Ctrl + t
Reopen the last closed tab, and jump to it: Ctrl + Shift + t
Jump to the next open tab: Ctrl + Tab or Ctrl + PgDn
Jump to the previous open tab: Ctrl + Shift + Tab or Ctrl + PgUp
Jump to a specific tab: Ctrl + 1 through Ctrl + 8
Jump to the last tab: Ctrl + 9
Open your home page in the current tab: Alt + Home
Open the previous page from your browsing history in the current tab: Alt + Left arrow
Open the next page from your browsing history in the current tab: Alt + Right arrow
Close the current tab: Ctrl + w or Ctrl + F4
Close the current window: Ctrl + Shift + w
Minimize the current window: Alt + Space + n
Maximize the current window: Alt + Space + x
Close the current window: Alt + F4
Quit Brave: Ctrl + Shift + w or alt + f (then) x
Open the Main menu: Alt + f or Alt + e or F10 + Enter
Show or hide the Bookmarks bar: Ctrl + Shift + b
Open the Bookmarks Manager: Ctrl + Shift + o
Open the History page in a new tab: Ctrl + h
Open the Downloads page in a new tab: Ctrl + j
Open the Brave Task Manager: Shift + Esc
Set focus on the first item in the toolbar: Shift + Alt + t
Open the Find Bar to search the current page: Ctrl + f or F3
Jump to the next match to your Find Bar search: Ctrl + g
Jump to the previous match to your Find Bar search: Ctrl + Shift + g
Open Developer Tools: Ctrl + Shift + j or F12
Open the Clear Browsing Data options: Ctrl + Shift + Delete
Open Profile menu: Ctrl + Shift + m
Jump to the address bar: Ctrl + l or Alt + d or F6
Search from anywhere on the page: Ctrl + k or Ctrl + e
Open options to print the current page: Ctrl + p
Open options to save the current page: Ctrl + s
Reload the current page, ignoring cached content: Shift + F5 or Ctrl + Shift + r
Browse clickable items moving backward: Shift + Tab
Open a file from your computer in Brave: Ctrl + o + Select a file
Display non-editable HTML source code for the current page: Ctrl + u
Save your current webpage as a bookmark: Ctrl + d
Save all open tabs as bookmarks in a new folder: Ctrl + Shift + d
Make everything on the page bigger: Ctrl and +
Make everything on the page smaller: Ctrl and -
Return everything on the page to default size: Ctrl + 0
Scroll up a webpage, a screen at a time: Shift + Space or PgUp
Scroll horizontally on the page: Shift + Scroll your mouse wheel
Move your cursor to the front of the previous word in a text field: Ctrl + Left arrow
Move your cursor to the back of the next word in a text field: Ctrl + Right arrow
Delete the previous word in a text field: Ctrl + Backspace
Open the Home page in the current tab: Alt + Home
Open a link in new background tab: Ctrl + Click a link
Open a link, and jump to it: Ctrl + Shift + Click a link
Open a link in a new window: Shift + Click a link
Download the target of a link: Alt + Click a link
Make everything on the page bigger: Ctrl + Scroll your mouse-wheel up
Make everything on the page smaller: Ctrl + Scroll your mouse-wheel down
Open a new window: ⌘ + n
Open a new window in Private mode: ⌘ + Shift + n
Open a new tab, and jump to it: ⌘ + t
Reopen the last closed tab, and jump to it: ⌘ + Shift + t
Jump to the next open tab: ⌘ + Option + Right arrow
Jump to the previous open tab: ⌘ + Option + Left arrow
Jump to a specific tab: ⌘ + 1 through ⌘ + 8
Jump to the last tab: ⌘ + 9
Open the previous page in your browsing history for the current tab: ⌘ + [ or ⌘ + Left arrow
Open the next page in your browsing history for the current tab: ⌘ + ] or ⌘ + Right arrow
Closes the current tab or pop-up: ⌘ + w
Closes the current window: ⌘ + Shift + w
Minimize the window: ⌘ + m
Hide Brave: ⌘ + h
Quit Brave: ⌘ + q
Show or hide the Bookmarks Bar: ⌘ + Shift + b
Open the Bookmark Manager: ⌘ + Option + b
Open the Settings page in a new tab: ⌘ + ,
Open the History page in a new tab: ⌘ + y
Open the Downloads page in a new tab: ⌘ + Shift + j
Open the Find Bar to search the current page: ⌘ + f
Jump to the next match to your Find Bar search: ⌘ + g
Jump to the previous match to your Find Bar search: ⌘ + Shift + g
When Find Bar is open, search for selected text: ⌘ + e
Open Developer Tools: ⌘ + Option + i
Open the Clear Browsing Data options: ⌘ + Shift + Delete
Open Profile menu: ⌘ + Shift + m
Jump to the address bar: ⌘ + l
Open options to print the current page: ⌘ + p
Open options to save the current page: ⌘ + s
Open the Page Setup dialog: ⌘ + Option + p
Reload your current page, ignoring cached content: ⌘ + Shift + r
Browse clickable items moving backward: Shift + Tab
Open a file from your computer in Brave: ⌘ + o + Select a file
Display non-editable HTML source code for the current page: ⌘ + Option + u
Open the JavaScript Console: ⌘ + Option + j
Save your current webpage as a bookmark: ⌘ + d
Save all open tabs as bookmarks in a new folder: ⌘ + Shift + d
Turn full-screen mode on or off: ⌘ + Ctrl + f
Make everything on the page bigger: ⌘ and +
Make everything on the page smaller: ⌘ and -
Return everything on the page to the default size: ⌘ + 0
Scroll up a webpage, a screen at a time: Shift + Space
Search the web: ⌘ + Option + f
Move your cursor to the front of the previous word in a text field: Option + Left arrow
Move your cursor to the back of the next word in a text field: Option + Right arrow
Delete the previous word in a text field: Option + Delete
Open your home page in the current tab: ⌘ + Shift + h
Open a link in new background tab: ⌘ + Click a link
Open a link, and jump to it: ⌘ + Shift + Click a link
Open a link in a new window: Shift + Click a link
Download the target of a link: Option + Click a link`;

const optionRegex = /Option/g;
const optionReplacement = "Alt";

const commandRegex = /⌘/g;
const commandReplacement = "Meta";

export const braveHK = beforeRegex
  .replace(optionRegex, optionReplacement)
  .replace(commandRegex, commandReplacement);
