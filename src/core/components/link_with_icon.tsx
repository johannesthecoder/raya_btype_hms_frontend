import { Link } from "react-router-dom";

type LinkWithIconProps = {
  children: string | JSX.Element | JSX.Element[];
  icon: JSX.Element;
  url: string;
  isBold?: boolean;
};

export const LinkWithIcon = ({
  children,
  icon,
  url,
  isBold = true,
}: LinkWithIconProps): JSX.Element => {
  return (
    <Link
      className={`py-3 px-3 flex flex-col gap-3 ${
        isBold && "font-bold"
      } justify-center items-center border border-neutral-grey text-  hover:text-primary hover:border-primary hover:underline rounded-lg outline-none`}
      to={url}
    >
      {icon}
      <span className="capitalize">{children}</span>
    </Link>
  );
};
