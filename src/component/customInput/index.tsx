type TCustomInputField = {
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  autoFocus?: boolean;
};

export const CustomInput = (input: TCustomInputField): JSX.Element => {
  return (
    <input
      className="border-b-2 ml-2"
      value={input.value}
      onChange={(e) => input.onChange(e.target.value)}
      required={input.required ?? false}
      autoFocus={input.autoFocus ?? false}
      type="text"
    />
  );
};
