import React from "react";
import { StatusButton } from "@/components";

const ContentHeader = ({
  headerText,
  contentText,
  buttonText,
  buttonSymbol,
  parentClassName,
  customHeaderColor,
  status,
  customContentHeaderStatusButton,
}) => {
  return (
    <div className={`${parentClassName}`}>
      <div className="flex justify-between">
        <div className="header-headerText">
          <span className={`${customHeaderColor || "headerColor"} `}>
            {headerText} :{" "}
          </span>
          <span>{contentText}</span>
        </div>
        <div>
          {buttonSymbol && (
            <span className="">
              <StatusButton
                parentClassName="header-button"
                statusButtonProps={{
                  text: buttonText,
                  status: status,
                  custom: `${
                    customContentHeaderStatusButton ||
                    "defaultContentHeaderStatusButton"
                  }`,
                }}
              />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
