import Image from "next/image";
import { SetStateAction, Dispatch } from "react";

export const BrowserSelector = ({
  browser,
  targetBrowsers,
  setTargetBrowsers,
}: {
  browser: string;
  targetBrowsers: Set<string>;
  setTargetBrowsers: Dispatch<SetStateAction<Set<string>>>;
}) => {
  function updateTargetBrowsers(browser: string) {
    const newTargetBrowsers = new Set(targetBrowsers);

    // add or remove the selected browser depending on whether or not it is already in the `targetBrowsers` Set
    targetBrowsers.has(browser)
      ? newTargetBrowsers.delete(browser)
      : newTargetBrowsers.add(browser);

    setTargetBrowsers(newTargetBrowsers);
  }

  return (
    <div className="selector-container">
      <label htmlFor={`${browser}-selector`}>
        <Image
          className="browser-icon"
          alt={browser}
          src={`./${browser}.svg`}
          height={25}
          width={25}
        />
      </label>
      <input
        className="browser-checkbox"
        type="checkbox"
        id={`${browser}-selector`}
        onClick={() => updateTargetBrowsers(browser)}
        data-browser={browser}
      />
    </div>
  );
};
