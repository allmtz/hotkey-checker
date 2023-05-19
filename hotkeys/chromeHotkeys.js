import { standardize } from "./regex";

// from https://support.google.com/chrome/answer/157179?hl=en&co=GENIE.Platform%3DDesktop#zippy=%2Ctab-window-shortcuts%2Cgoogle-chrome-feature-shortcuts%2Cwebpage-shortcuts%2Caddress-bar-shortcuts%2Cmouse-shortcuts
// for Mac and Windows
// updated 5/19/23
const rawChromeHks = `Open a new window: Ctrl + n
Open a new window in Incognito mode: Ctrl + Shift + n
Open a new tab, and jump to it: Ctrl + t
Reopen previously closed tabs in the order they were closed: Ctrl + Shift + t
Jump to the next open tab: Ctrl + Tab or Ctrl + PgDn
Jump to the previous open tab: Ctrl + Shift + Tab or Ctrl + PgUp
Jump to a specific tab: Ctrl + 1
Jump to a specific tab: Ctrl + 2
Jump to a specific tab: Ctrl + 3
Jump to a specific tab: Ctrl + 4
Jump to a specific tab: Ctrl + 5
Jump to a specific tab: Ctrl + 6
Jump to a specific tab: Ctrl + 7
Jump to a specific tab: Ctrl + 8
Jump to the rightmost tab: Ctrl + 9
Open your home page in the current tab: Alt + Home
Open the previous page from your browsing history in the current tab: Alt + Left arrow
Open the next page from your browsing history in the current tab: Alt + Right arrow
Close the current tab: Ctrl + w or Ctrl + F4
Close the current window: Ctrl + Shift + w or Alt + F4
Minimize the current window: Alt + Space then n
Maximize the current window: Alt + Space then x
Quit Google Chrome: Alt + f then x
Move tabs right or left: Ctrl + Shift + PgUp or Ctrl + Shift + PgDn
Open the Chrome menu: Alt + f or Alt + e
Show or hide the Bookmarks bar: Ctrl + Shift + b
Open the Bookmarks Manager: Ctrl + Shift + o
Open the History page in a new tab: Ctrl + h
Open the Downloads page in a new tab: Ctrl + j
Open the Chrome Task Manager: Shift + Esc
Set focus on the first item in the Chrome toolbar: Shift + Alt + t
Open the Find Bar to search the current page: Ctrl + f or F3
Jump to the next match to your Find Bar search: Ctrl + g
Jump to the previous match to your Find Bar search: Ctrl + Shift + g
Open Developer Tools: Ctrl + Shift + j or F12
Open the Clear Browsing Data options: Ctrl + Shift + Delete
Log in a different user or browse as a Guest: Ctrl + Shift + m
Open a feedback form: Alt + Shift + i
Skip to web contents: Ctrl + F6
Focus on inactive dialogs: Alt + Shift + a
Jump to the address bar: Ctrl + l or Alt + d or F6
Search from anywhere on the page: Ctrl + k or Ctrl + e
Move cursor to the address bar: Ctrl + F5
Open options to print the current page: Ctrl + p
Open options to save the current page: Ctrl + s
Reload the current page, ignoring cached content: Shift + F5 or Ctrl + Shift + r
Browse clickable items moving backward: Shift + Tab
Open a file from your computer in Chrome: Ctrl + o 
Display non-editable HTML source code for the current page: Ctrl + u
Save your current webpage as a bookmark: Ctrl + d
Save all open tabs as bookmarks in a new folder: Ctrl + Shift + d
Make everything on the page bigger: Ctrl and +
Make everything on the page smaller: Ctrl and -
Return everything on the page to default size: Ctrl + 0
Scroll up a webpage, a screen at a time: Shift + Space or PgUp
Scroll horizontally on the page: Shift + Scroll your mousewheel
Move your cursor to the beginning of the previous word in a text field: Ctrl + Left arrow
Move your cursor to the next word: Ctrl + Right arrow
Delete the previous word in a text field: Ctrl + Backspace
Open the Home page in the current tab: Alt + Home
Open a link in new background tab: Ctrl + Click a link
Open a link, and jump to it: Ctrl + Shift + Click a link
Open a link in a new window: Shift + Click a link
Scroll horizontally on the page: Shift + Scroll your mousewheel
Download the target of a link: Alt + Click a link
Make everything on the page bigger: Ctrl + Scroll your mousewheel up
Make everything on the page smaller: Ctrl + Scroll your mousewheel down
Open a new window: ⌘ + n
Open a new window in Incognito mode: ⌘ + Shift + n
Open a new tab, and jump to it: ⌘ + t
Reopen previously closed tabs in the order they were closed: ⌘ + Shift + t
Jump to the next open tab: ⌘ + Option + Right arrow
Jump to the previous open tab: ⌘ + Option + Left arrow
Jump to a specific tab: ⌘ + 1
Jump to a specific tab: ⌘ + 2
Jump to a specific tab: ⌘ + 3
Jump to a specific tab: ⌘ + 4
Jump to a specific tab: ⌘ + 5
Jump to a specific tab: ⌘ + 6
Jump to a specific tab: ⌘ + 7
Jump to a specific tab: ⌘ + 8
Jump to the last tab: ⌘ + 9
Open the previous page in your browsing history for the current tab: ⌘ + [ or ⌘ + Left arrow
Open the next page in your browsing history for the current tab: ⌘ + ] or ⌘ + Right arrow
Close the current tab or pop-up: ⌘ + w
Close the current window: ⌘ + Shift + w
Minimize the window: ⌘ + m
Hide Google Chrome: ⌘ + h
Quit Google Chrome: ⌘ + q
Move tabs right or left: Ctrl + Shift + PgUp or Ctrl + Shift + PgDn
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
Log in as a different user, browse as a Guest, or access payment and password info: ⌘ + Shift + m
Cycle focus to unfocused dialog (if showing) and all toolbars: ⌘ + Option + Up arrow or Down arrow
Open a feedback form: ⌘ + Option + Shift + i
Focus on inactive dialogs: ⌘ + Option + Shift + a
Jump to the address bar: ⌘ + l
Move cursor to the address bar: Ctrl + F5
Compose a new email message with a link to the current page: ⌘ + Shift + i
Open options to print the current page: ⌘ + p
Open options to save the current page: ⌘ + s
Open the Page Setup dialog: ⌘ + Option + p
Reload your current page, ignoring cached content: ⌘ + Shift + r
Browse clickable items moving backward: Shift + Tab
Open a file from your computer in Google Chrome: ⌘ + o
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
Move your cursor to the beginning of the previous word in a text field: Option + Left arrow
Move your cursor to the back of the next word in a text field: Option + Right arrow
Delete the previous word in a text field: Option + Delete
Open your home page in the current tab: ⌘ + Shift + h
Open a link in new background tab: ⌘ + Click a link
Open a link, and jump to it: ⌘ + Shift + Click a link
Open a link in a new window: Shift + Click a link
Download the target of a link: Option + Click a link`;

export const chromeHks = standardize(rawChromeHks);
