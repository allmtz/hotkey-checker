// TODO
// create a "target browser" selector DONE
// depending on which browsers are being targeted, need a way to check multiple HkObjs for a matching input
// display input matches for multiple browsers

import { BrowserSelector } from "@/components/BrowserSelector";
import { InputDisplay } from "@/components/InputDisplay";
import { useEffect, useState } from "react";
import { ResultsDisplay } from "@/components/ResultsDisplay";
import {
  chromeHksObj,
  braveHksObj,
  firefoxHksObj,
} from "../../hotkeys/hkObjectCreator";

// Working with the browser keydown event and its properties
// for letters : might need a case normalizer ==> can use e.key to check which key was pressed

type description = string;

type browserHkObj = {
  [browser: string]: {
    [hotkey: string]: description;
  };
};

export type InputMatch = {
  browser: string;
  hotkey: string;
  description: string;
};

const modifierSet = new Set(["Shift", "Control", "Meta", "Alt"]);
const MAX_MODIFIERS = 3;

const browserHksObj: browserHkObj = {
  chrome: chromeHksObj,
  brave: braveHksObj,
  firefox: firefoxHksObj,
};

export default function Home() {
  const [keyPressed, setKeyPressed] = useState("");
  const [keyCode, setkeyCode] = useState("");
  const [input, setInput] = useState<string[]>([]);
  const [description, setDescription] = useState("");
  const [previousInput, setpreviousInput] = useState<string[]>([]);
  const [targetBrowsers, setTargetBrowsers] = useState(new Set<string>());
  const [searchResults, setSearchResults] = useState<InputMatch[]>([]);

  useEffect(() => {
    const keydownHandler = (e: KeyboardEvent) => {
      e.preventDefault();
      setkeyCode(e.code);
      setKeyPressed(e.key);

      // check to see if a modifier was pressed
      if (modifierSet.has(e.key)) {
        // key pressed was a modifier
        // the key pressed and the current input are not the same, current input = history of keys pressed

        setInput((input) => {
          // check if the new input length would be less than 3 (3 is the max number of modifiers a hotkey can have)
          if (input.length + 1 <= MAX_MODIFIERS) {
            return [...input, e.key];
          } else {
            return input;
          }
        });
      } else {
        // key pressed was not a modifier ==> execute a query

        let browsersSelected: string[] = [];

        const browserOptions: NodeListOf<HTMLInputElement> =
          document.querySelectorAll(".browser-checkbox");

        // determine which browsers the user selected
        browserOptions.forEach((browser) => {
          if (browser.checked) {
            browsersSelected.push(browser.dataset["browser"]!);
          }
        });

        setInput((input) => {
          const newInput = [...input, e.key]; // this is the input array that needs to be used to perform the query
          const hk = newInput.join(" + ");
          let matches: InputMatch[] = [];

          // search the selected browsers to see if the user input matches any hotkeys
          browsersSelected.forEach((browser) => {
            const desc =
              browserHksObj[browser as keyof object][hk as keyof object];

            const match: InputMatch = {
              browser: browser,
              hotkey: hk,
              description: desc || "No hotkey found",
            };
            matches.push(match);
          });

          setSearchResults(matches);
          setpreviousInput(newInput);
          setInput([]); // reset the input array

          return newInput;
        });
      }
    };

    document.addEventListener("keydown", keydownHandler);

    return () => document.removeEventListener("keydown", keydownHandler);
  }, []);
  return (
    <>
      <div className="container">
        <h1>
          {targetBrowsers.size > 0 ? "Press a key" : "Select target browsers"}
        </h1>

        <div className="selectors-container">
          <BrowserSelector
            browser="chrome"
            targetBrowsers={targetBrowsers}
            setTargetBrowsers={setTargetBrowsers}
          />
          <BrowserSelector
            browser="brave"
            targetBrowsers={targetBrowsers}
            setTargetBrowsers={setTargetBrowsers}
          />
          <BrowserSelector
            browser="firefox"
            targetBrowsers={targetBrowsers}
            setTargetBrowsers={setTargetBrowsers}
          />
        </div>

        <InputDisplay prompt="Current input : " input={input} />
        <InputDisplay prompt="Previous input : " input={previousInput} />
        <ResultsDisplay searchResults={searchResults} />
      </div>
    </>
  );
}
