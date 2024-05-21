import { Button as PrimeReactButton } from "primereact/button";
import { BsDot } from "react-icons/bs";

export const Button = (props) => {
  const { parentClassName, parentStyle, buttonProps = {} } = props;
  const {
    hoverBg,
    custom,
    buttonClass,
    text,
    icon,
    bg,
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

export const StatusButton = (props) => {
  const { parentClassName, parentStyle, statusButtonProps = {} } = props;
  const {
    hoverBg,
    custom,
    buttonClass,
    text,
    icon,
    bg,
    isLoading,
    warning,
    blueStatus:isBlueStatus,
    orangeStatus:isOrangeStatus,
    goldStatus:isGoldStatus,
    aquaStatus:isAquaStatus,
    warningStatus:isWarningStatus,
    ...restProps
  } = statusButtonProps;
  let status
  if(isBlueStatus){
    status="blueStatus"
  }else if(isOrangeStatus){
    status="orangeStatus"
  }
  else if(isGoldStatus){
    status="goldStatus"
  }
  else if(isAquaStatus){
    status="aquaStatus"
  }else if(isWarningStatus){
    status="warningStatus"
  }

  return (
    <div className={`${status} ${parentClassName} `} style={parentStyle}>
      <PrimeReactButton
        className={`${bg} ${hoverBg} ${custom || "custom-button"
          }  ${buttonClass} font-medium border-noround`}
        label={text}
        icon={isWarningStatus ? "pi pi-exclamation-circle":<><BsDot/>
        </>}
        disabled={isLoading ? isLoading : false}
        {...restProps}
      />
    </div>
  );
};