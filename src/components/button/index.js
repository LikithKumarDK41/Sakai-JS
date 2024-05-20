import { Button as PrimeReactButton } from "primereact/button";

export const Button = (props) => {
  const { parentClassName, parentStyle, buttonProps = {} } = props;
  const {
    hoverBg,
    custom,
    buttonClass,
    text,
    icon,
    bg,
    rounded,
    isLoading,
    forward: isForward,
    ...restProps
  } = buttonProps;
  let updatedIcon = icon;
  if (isForward) {
    updatedIcon="pi pi-angle-right";
  }

  return (
    <div className={`${parentClassName}`} style={parentStyle}>
      <PrimeReactButton
        className={`${bg} ${hoverBg} ${custom || "custom-button"
          }  ${buttonClass} font-medium border-noround`}
        label={text}
        rounded={"true"}
        icon={isLoading ? "pi pi-spin pi-spinner" : icon || updatedIcon}
        disabled={isLoading ? isLoading : false}
        {...restProps}
      />
    </div>
  );
};

export const ButtonRounded = (props) => {
  const { parentClass, parentStyle, buttonProps = {} } = props;
  const { hoverBg, custom, buttonClass, text, icon, bg, ...restProps } =
    buttonProps;

  return (
    <div className={`${parentClass}`} style={parentStyle}>
      <PrimeReactButton
        className={`${bg} ${hoverBg} ${icon && "custom-icon-button"} ${custom || "custom-button"
          } ${buttonClass} font-medium border-round-3xl`}
        label={text}
        icon={icon}
        {...restProps}
      />
    </div>
  );
};