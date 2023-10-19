export const ErrorMessage = ({ type, message }: { type: string; message: string }): JSX.Element => {
  return (
    <div className="flex flex-col gap-1 justify-center items-center">
      <strong className="text-failure text-2xl capitalize">{type}</strong>
      <small className="text-neutral-grey">{message}</small>
    </div>
  );
};
