export const TextDisplay = ({
  prompt,
  statefulText,
}: {
  prompt: string;
  statefulText: string;
}) => {
  return (
    <div className="flex-row">
      <p>{prompt}</p>
      <p className="large-text">{statefulText}</p>
    </div>
  );
};
