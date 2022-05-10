export enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
}

export enum ButtonSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export type ButtonProps = {
  type?: "submit" | "reset" | "button";
  text: string;
  variant: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
};

const Button = ({
  type = "submit",
  text,
  size = ButtonSize.MEDIUM,
  variant = ButtonVariant.PRIMARY,
  onClick,
}: ButtonProps) => {
  return (
    <button onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
