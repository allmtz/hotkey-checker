// from https://www.computerhope.com/shortcut/firefox.htm
// updated 5/9/23
const beforeRegex = `Open your homepage. : Alt + home
Open the bookmarks in the file menu. : Alt + Shift + b
Display all previous text entered in a text box and available options on drop-down menu. : Alt + ↓
Back a page. : Alt + ←
Forward a page. : Alt + →
Zoom out of a web page and decrease font size (if supported). : Ctrl + -
Zoom in on a web page and decrease font size (if supported). : Ctrl +  + 
Reset browser zoom to default. : Ctrl + 0
Selects all text. : Ctrl + a
Open the Bookmarks in a sidebar, to view all bookmarks in Firefox. : Ctrl + b
Copies selected text. : Ctrl + c
Add a bookmark for the page currently opened. : Ctrl + d
Move the cursor to the search box. : Ctrl + e
Access the Find option, to search for any text on the currently open web page. : Ctrl + f
Advance to the next result of a search performed with Ctrl+F. Press Ctrl+Shift+G to return to a previous search result. : Ctrl + g
View browsing history in sidebar. To open the history in a window press Ctrl+Shift+H. : Ctrl + h
Display the Page Info window about the web page currently being viewed. : Ctrl + i
Display the download window. : Ctrl + j
Move the cursor to the search box. : Ctrl + k
Move cursor to address box. : Ctrl + l
Open New browser window. : Ctrl + n
Access the Open File window to open a file in Firefox. : Ctrl + o
Print current page or frame. : Ctrl + p
Opens a new tab. : Ctrl + t
View a web page's source code. : Ctrl + u
Closes the currently selected tab. : Ctrl + f4
Refresh the page, ignoring the Internet cache (force full refresh). : Ctrl + f5
Quickly complete an address. For example, type computerhope in the address bar and press Ctrl+Enter to get https://www.computerhope.com. : Ctrl + enter
Open the browser tab to the right. : Ctrl + pgdn
Open the browser tab to the left. : Ctrl + pgup
Moves through each of the open tabs (left to right). Doing Ctrl+Shift+Tab reverses the direction (right to left). : Ctrl + tab
Open the Clear Data window to quickly clear private data. : Ctrl + Shift + delete
Toggle the bookmarks bar between hidden and shown. : Ctrl + Shift + b
Open the history in a window instead of a sidebar like Ctrl+H. : Ctrl + Shift + h
Open the Browser Console to troubleshoot an unresponsive script error. See:How to fix an unresponsive script error. : Ctrl + Shift + j
Open responsive mode in the Firefox developer tools. : Ctrl + Shift + m
Open Other Bookmarks in a separate window. : Ctrl + Shift + o
Open a new private browsing window. : Ctrl + Shift + p
Undo the close of a tab. : Ctrl + Shift + t
Close the Firefox browser window. If multiple tabs are open in the Firefox window you'll get a prompt before Firefox closes. : Ctrl + Shift + w
Moves up a page at a time. : Shift + spacebar`;

const ctrlRegex = /Ctrl/g;
const ctrlReplacement = "Control";

export const firefoxHks = beforeRegex.replace(ctrlRegex, ctrlReplacement);
