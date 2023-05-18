import { standardize } from "./regex";

// for Edge
// Mac and Windows
// from https://support.microsoft.com/en-us/microsoft-edge/keyboard-shortcuts-in-microsoft-edge-50d3edab-30d9-c7e4-21ce-37fe2713cfad#ID0EBD=Windows
// updated 5/18/23
const rawEdgeHks = `Show or hide the favorites bar : Ctrl + Shift + b 
Set focus on the first item in the favorites bar : Alt + Shift + b 
Save the current tab as a favorite : Ctrl + d 
Save all open tabs as favorites in a new folder : Ctrl + Shift + d 
Open search in sidebar : Ctrl + Shift + e 
Select the URL in the address bar to edit : Alt + d 
Open a search query in the address bar : Ctrl + e 
Open the Settings and more  menu : Alt + e 
Open find on page : Ctrl + f 
Open the Settings and more  menu : Alt + f 
Jump to the next result for find on page : Ctrl + g 
Jump to the previous result for find on page : Ctrl + Shift + g 
Open History : Ctrl + h 
Open Developer Tools : Ctrl + Shift + i 
Open the Send feedback dialog : Alt + Shift + i 
Open Downloads : Ctrl + j 
Open a search query in the address bar : Ctrl + k 
Duplicate the current tab : Ctrl + Shift + k 
Select the URL in the address bar to edit : Ctrl + l 
Paste and search or Paste and go (if it's a URL) : Ctrl + Shift + l 
Mute the current tab (toggle) : Ctrl + m 
Sign in as a different user or browse as a Guest : Ctrl + Shift + m 
Open a new window : Ctrl + n 
Open a new InPrivate window : Ctrl + Shift + n 
Open a file from your computer in Edge : Ctrl + o 
Open Favorites : Ctrl + Shift + o 
Print the current page : Ctrl + p 
Print using the system dialog : Ctrl + Shift + p 
Reload the current page : Ctrl + r 
Reload the current page, ignoring cached content : Ctrl + Shift + r 
Save the current page : Ctrl + s 
Open a new tab and switch to it : Ctrl + t 
Reopen the last closed tab, and switch to it : Ctrl + Shift + t 
Set focus on the first item in the app bar toolbar : Alt + Shift + t 
View source : Ctrl + u 
Start or stop Read Aloud : Ctrl + Shift + u 
Paste without formatting : Ctrl + Shift + v 
Close the current tab : Ctrl + w 
Close the current window : Ctrl + Shift + w 
Open Collections : Ctrl + Shift + y 
Reset page zoom level : Ctrl + 0 (zero) 
Switch to a specific tab : Ctrl + 1 
Switch to a specific tab : Ctrl + 2 
Switch to a specific tab : Ctrl + 3 
Switch to a specific tab : Ctrl + 4 
Switch to a specific tab : Ctrl + 5 
Switch to a specific tab : Ctrl + 6 
Switch to a specific tab : Ctrl + 7 
Switch to a specific tab : Ctrl + 8 
Switch to the last tab : Ctrl + 9 
Add www. to the beginning and .com to the end of text typed in the address bar : Ctrl + enter 
Switch to the next tab : Ctrl + tab 
Switch to the previous tab : Ctrl + Shift + tab 
Zoom in : Ctrl + plus (+) 
Zoom out : Ctrl + minus (-) 
Toggle PDF between fit to page / fit to width : Ctrl + \ (in a pdf) 
Rotate PDF counter-clockwise 90* : Ctrl + [ (in a pdf) 
Rotate PDF clockwise 90* : Ctrl + ] (in a pdf) 
Open clear browsing data options : Ctrl + Shift + delete 
Set focus on the Settings and more  button : Alt 
Go back : Alt + left arrow 
Go forward : Alt + right arrow 
Open your home page in the current tab : Alt + home 
Close the current window : Alt + f4 
Close the current tab : Ctrl + f4 
Reload the current tab, ignoring cached content : Shift + f5 
Move focus to previous pane : Shift + f6 
Move focus to the web content pane : Ctrl + f6 
Open context menu : Shift + f10 
Scroll up webpage, one screen at a time : Shift + spacebar 
Switch to the next tab : Ctrl + pgdn 
Switch to the previous tab : Ctrl + pgup 
Go to previous tab stop : Shift + tab 
Show or hide the favorites bar : Command + Shift + b 
Open Developer tools : Command + Shift + c 
Save your current tab as a favorite : Command + d 
Save all open tabs as favorites in a new folder : Command + Shift + d 
Open search in sidebar : Command + Shift + e 
Open find on page : Command + f 
Turn full-screen mode on or off : Command + ctrl + f 
Search the web : Command + Option + f 
Jump to the next result for find on page : Command + g 
Jump to the previous result for find on page : Command + Shift + g 
Open your home page in the current tab : Command + Shift + h 
Open the JavaScript Console : Command + Option + j 
Select the URL in the address bar to edit : Command + l 
Open Downloads : Command + Option + l 
Toggle tab mute on and off : Ctrl + m 
Minimize window : Command + m 
Minimize all windows of the front app : Command + Option + m 
Log in a different user or browse as a guest : Command + Shift + m 
Open a new window : Command + n 
Open a new window in InPrivate mode : Command + Shift + n 
Open a file from your computer in Edge : Command + o 
Print the current tab : Command + p 
Quit : Command + q 
Reload the current tab : Command + r 
Reload the current tab, ignoring cached content : Command + Shift + r 
Save the current tab : Command + s 
Open a new tab, and switch to it : Command + t 
Reopen the last closed tab, and switch to it : Command + Shift + t 
Start or stop Read Aloud : Command + Shift + u 
Paste format free text : Command + Shift + v 
Close the current tab : Command + w 
Close the current window : Command + Shift + w 
Open History : Command + y 
Reset zoom level : Command + 0 (zero) 
Switch to a specific tab : Command + 1 
Switch to a specific tab : Command + 2 
Switch to a specific tab : Command + 3 
Switch to a specific tab : Command + 4 
Switch to a specific tab : Command + 5 
Switch to a specific tab : Command + 6 
Switch to a specific tab : Command + 7 
Switch to a specific tab : Command + 8 
Switch to the last tab : Command + 9 
Move cursor to the beginning of first word in the same line : Command + left arrow 
Move cursor to the end of last word in the same line : Command + right arrow 
Delete the entire text field / entire line of text : Command + delete 
Search the typed query in new tab : Command + return 
Open clear browsing data options : Command + Shift + delete 
Zoom in : Command + plus (+) 
Zoom out : Command + minus (-) 
Toggle PDF between fit to page / fit to width : Ctrl + \ (in a pdf) 
Rotate PDF counter-clockwise 90* : Ctrl + [ (in a pdf) 
Rotate PDF clockwise 90* : Ctrl + ] (in a pdf) 
Navigate backward : Command + [ 
Navigate forward : Command + ] 
Switch to the next tab : Ctrl + fn + down arrow 
Switch to the previous tab : Ctrl + fn + up arrow 
Scroll up webpage, one screen at a time : Shift + space 
Move to the previous control : Shift + tab 
Go to the previous tab : Shift + ctrl + tab`;

export const edgeHks = standardize(rawEdgeHks);
