import { standardize } from "./regex";

// from https://support.mozilla.org/en-US/kb/keyboard-shortcuts-perform-firefox-tasks-quickly#firefox:mac:fx114
// version 114 for Mac
// updated 5/9/23
const rawFirefoxHks = `Back : command + ←
Back : command + [
Forward : command + →
Forward : command + ]
Forward : Shift + backspace
Home : option + home
Open File : command + o
Reload : command + r
Reload (override cache) : command + shift + r
Stop : command + .
Focus Previous Link or Input Field : Shift + tab
Go Up a Screen : Shift + space bar
Go to Bottom of Page : command + ↓
Go to Top of Page : command + ↑
Move to Previous Frame, Pop-Up : Shift + f6
Print : command + p
Save Focused Link : option + return
Save Page As : command + s
Zoom In : command + +
Zoom Out : command + -
Zoom Reset : command + 0
Copy : command + c
Cut : command + x
Paste : command + v
Paste (as plain text) : command + shift + v
Redo : command + shift + z
Select All : command + a
Undo : command + z
Find in This Page : command + f
Find Again : command + g
Find Previous : Shift + f3
Find Previous : command + shift + g
Switch Search Engine : option + ↓
Switch Search Engine : option + ↑
Focus Address bar for Web Search with Default Search Engine : command + k
Focus Address bar for Web Search with Default Search Engine : command + option + f
Focus Search bar : command + k
Focus Search bar : command + option + f
Change the Default Search Engine : command + ↓
Change the Default Search Engine : command + ↑
View menu to switch, add or manage search engines : option + ↓
View menu to switch, add or manage search engines : option + ↑
Close Tab : command + w
Close Window : command + shift + w
Cycle through Tabs in Recently Used Order : control + tab
Quit : command + q
Go one Tab to the Left : control + page up
Go one Tab to the Left : command + option + ←
Go one Tab to the Left : control + shift + tab
Go one Tab to the Right : control + page down
Go one Tab to the Right : command + option + →
Go one Tab to the Right : control + tab
Go to Tab 1 to 8 : command + 1
Go to Tab 1 to 8 : command + 2
Go to Tab 1 to 8 : command + 3
Go to Tab 1 to 8 : command + 4
Go to Tab 1 to 8 : command + 5
Go to Tab 1 to 8 : command + 6
Go to Tab 1 to 8 : command + 7
Go to Tab 1 to 8 : command + 8
Go to Last Tab : command + 9
Move Tab Left : Ctrl + Shift + page up
Move Tab Right : Ctrl + Shift + page down
Move Tab to start : command + shift + home
Move Tab to end : command + shift + end
Mute/Unmute Audio : control + m
New Tab : command + t
New Window : command + n
New Private Window : command + shift + p
Open Address or Search in New Background Tab : option + shift + return
Open Address or Search in New Foreground Tab : option + return
Open Address or Search in New Window : shift + return
Open Search in New Background Tab : command + shift + return
Open Search in New Foreground Tab : command + return
Open Focused Bookmark in New Foreground Tab : command + return
Open Focused Bookmark in New Background Tab : command + shift + return
Open Focused Link in New Background Tab : command + return
Open Focused Link in New Foreground Tab : command + shift + return
Open Focused Bookmark or Link in New Window : shift + return
Show All Tabs : control + shift + tab
Undo Close Tab : command + shift + t
Undo Close Window : command + shift + n
Moves the URL left or right (if cursor is in the address bar) : command + shift + x
History sidebar : Ctrl + h
Library window (History) : Ctrl + Shift + h
Clear Recent History : Ctrl + Shift + del
History sidebar : command + shift + h
Clear Recent History : command + shift + delete
Bookmark All Tabs : command + shift + d
Bookmark This Page : command + d
Bookmarks sidebar : command + b
Show/hide the Bookmarks toolbar : command + shift + b
Show All Bookmarks (Library Window) : command + shift + o
Downloads : command + j
Add-ons : command + shift + a
Toggle Developer Tools : command + alt + i
Web Console : command + alt + k
Inspector : command + alt + c
Take a screenshot : command + shift + s
Style Editor : Shift + f7
Profiler : Shift + f5
Network : command + alt + e
Responsive Design View : command + alt + m
Page Source : command + u
Browser Console : command + shift + j
Page Info : command + i
Zoom in : command + +
Zoom out : command + -
Automatic Zoom : command + 0
Rotate counterclockwise : Shift + r
Switch to Presentation Mode : command + Alt + p
Focus the Page Number input box : command + Alt + g
Complete .com Address : Ctrl + enter
Delete Selected Autocomplete Entry : Shift + del
Toggle Menu Bar activation (showing it temporarily when hidden) : Alt or f10alt or f10
Toggle Reader Mode : Ctrl + Alt + rf9
Toggle Context Menu : Shift + f10
Complete .com Address : control + return
Delete Selected Autocomplete Entry : shift + delete
Focus Address Bar : command + l
Focus Search Field in Library : command + f
Complete .com Address : Ctrl + enter
Complete .net Address : Shift + enter
Complete .org Address : Ctrl + Shift + enter
Toggle Menu Bar activation (showing it temporarily when hidden) : Alt or f10alt or f10
Toggle Reader Mode : Ctrl + Alt + rf9ctrl + Alt + r
Toggle Context Menu : Shift + f10
Complete .com Address : command + return
Complete .net Address : shift + return
Complete .org Address : command + shift + return
Delete Selected Autocomplete Entry : shift + delete
Mute audio : command + ↓
Unmute audio : command + ↑
Seek back 10 % : command + ←
Seek forward 10 % : command + →
Move the colored border to left, right, first or last tab. : command + arrow keys
Move the colored border to left, right, first or last tab. : command + home
Move the colored border to left, right, first or last tab. : command + end
Select or deselect the tab with the colored border. The other tabs stay selected or deselected. : command + space`;

export const firefoxHks = standardize(rawFirefoxHks);
