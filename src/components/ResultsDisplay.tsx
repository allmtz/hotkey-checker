import { InputMatch } from "@/pages";
import Image from "next/image";

export const ResultsDisplay = ({
  searchResults,
}: {
  searchResults: InputMatch[];
}) => {
  return (
    <div className="description-container">
      <p className="large-text">Description</p>
      {searchResults.map((result) => (
        <>
          <div className="description-results">
            <Image
              alt={result.browser}
              src={`${result.browser}.svg`}
              height={20}
              width={20}
            />
            <p>: {result.description}</p>
          </div>
        </>
      ))}
    </div>
  );
};
