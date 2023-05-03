import { InputDisplay } from "@/components/InputDisplay";
import { TextDisplay } from "@/components/TextDisplay";
import { useEffect, useState } from "react";
import chromeHksObj from "../../chromeHotkeys";

// Working with the browser keydown event and its properties
// for letters : might need a case normalizer ==> can use e.key to check which key was pressed

const modifierSet = new Set(["Shift", "Control", "Meta", "Alt"]);
const MAX_MODIFIERS = 3;

export default function Home() {
  const [keyPressed, setKeyPressed] = useState("");
  const [keyCode, setkeyCode] = useState("");
  const [input, setInput] = useState<string[]>([]);
  const [description, setDescription] = useState("");
  const [previousInput, setpreviousInput] = useState<string[]>([]);

  useEffect(() => {
    const keydownHandler = (e: KeyboardEvent) => {
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
        setInput((input) => {
          const newInput = [...input, e.key.toLowerCase()]; // this is the input array that needs to be used to perform the query
          // console.log(newInput);
          const key = newInput.join(" + ");

          if (chromeHksObj[key as keyof object]) {
            setDescription(chromeHksObj[key as keyof object]);
            setpreviousInput(newInput);
          } else {
            setDescription("Not found");
            setpreviousInput(newInput);
          }

          // reset the input array
          setInput([]);

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
        <h1>Press a key</h1>
        <InputDisplay prompt="Current input : " input={input} />
        <InputDisplay prompt="Previous input : " input={previousInput} />
        <TextDisplay prompt="Description : " statefulText={description} />
      </div>
    </>
  );
}
