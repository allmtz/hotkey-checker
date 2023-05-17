import { Key } from "./Key";

export const InputDisplay = ({
  prompt,
  input,
}: {
  prompt: string;
  input: string[];
}) => {
  return (
    <div className="flex-row display">
      <p className="input-prompt">{prompt}</p>
      {input.map((item, idx) => (
        <>
          {idx !== 0 && <span>+</span>}
          <Key character={item} />
        </>
      ))}
    </div>
  );
};
