export const TextDisplay = ({
  prompt,
  statefulText,
}: {
  prompt: string;
  statefulText: string;
}) => {
  return (
    <>
      <div className="flex-row">
        <p>{prompt} </p>
        <p className="large-text flex-row ">
          <b>{statefulText}</b>
        </p>
      </div>
    </>
  );
};
