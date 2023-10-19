type PrimaryButtonProps = {
  prefix?: string | JSX.Element;
  children: string | JSX.Element | JSX.Element[];
  suffix?: string | JSX.Element;
  onClick: Function;
  isBold?: boolean;
};

export const PrimaryButton = ({
  children,
  prefix,
  suffix,
  onClick,
  isBold = true,
}: PrimaryButtonProps): JSX.Element => {
  return (
    <button
      className={`py-3 px-3 flex gap-3 ${
        isBold && "font-bold"
      } justify-center items-center border border-neutral-grey text-  hover:text-primary hover:border-primary hover:underline rounded-lg outline-none`}
      onClick={() => onClick()}
    >
      {prefix && <span>{prefix}</span>}
      <span className="capitalize ">{children}</span>
      {suffix && <span>{suffix}</span>}
    </button>
  );
};
