import './customButton.css';

export const CustomButton = ({
  label,
  onClick,
  className,
  disabled,
  children,
  type,
}: {
  label?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  children?: JSX.Element | string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}): JSX.Element => {
  return (
    <button type={type ?? 'button'} onClick={onClick} className={`button ${className}`} disabled={disabled}>
      {children || label}
    </button>
  );
};
