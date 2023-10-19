interface InputProps {
  identifier: string;
  label: string;
  placeholder?: string;
  type?: "text" | "password";
  value?: any;
  inheritedClassName?: string;
  onClick?: Function;
  onChange: Function;
}

export const Input = ({
  identifier,
  label,
  placeholder = label,
  type = "text",
  value,
  inheritedClassName,
  onClick,
  onChange,
}: InputProps): JSX.Element => {
  return (
    <div className="flex flex-col">
      <label htmlFor={identifier} className="text-sm mb-1">
        {label}
      </label>
      <input
        key={identifier}
        id={identifier}
        type={type}
        placeholder={placeholder}
        name={identifier}
        value={value}
        onClick={() => onClick}
        onChange={(event: React.BaseSyntheticEvent) => onChange(event.target.value)}
        className={`${inheritedClassName} border border-neutral-grey focus:border-primary p-2 rounded-lg outline-none`}
      />
    </div>
  );
};
