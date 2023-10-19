import { Link } from "react-router-dom";

type PrimaryLinkProps = {
  prefix?: string | JSX.Element;
  children: string | JSX.Element | JSX.Element[];
  suffix?: string | JSX.Element;
  url: string;
  isBold?: boolean;
};

export const PrimaryLink = ({
  children,
  prefix,
  suffix,
  url,
  isBold = true,
}: PrimaryLinkProps): JSX.Element => {
  return (
    <Link
      className={`py-3 px-3 flex gap-3 ${
        isBold && "font-bold"
      } justify-center items-center border border-neutral-grey text-  hover:text-primary hover:border-primary hover:underline rounded-lg outline-none`}
      to={url}
    >
      {prefix && <span>{prefix}</span>}
      <span className="capitalize">{children}</span>
      {suffix && <span>{suffix}</span>}
    </Link>
  );
};
