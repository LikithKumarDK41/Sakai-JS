"use client";

import { Button, CustomHeader, StatusButton } from "@/components";
import React, { useState } from "react";

const DemoPage = () => {
  return (
    <>
      <div className="m-2">
        <CustomHeader header="Normal Button" />
        <div className="flex gap-2 flex-wrap">
          <Button
            buttonProps={{
              text: "Default-Button",
            }}
          />
          <Button
            buttonProps={{
              text: "Back-Button",
            }}
            parentClassName="back-button"
          />
          <Button
            buttonProps={{
              text: "Icon-right",
              forward: true,
              iconPos: "right",
            }}
          />
          <Button
            buttonProps={{
              text: "Icon-left",
              forward: true,
              iconPos: "left",
            }}
          />
        </div>
        <div className="mt-2">
          <CustomHeader header="Status Button" />
          <div className="flex gap-2 flex-wrap">
            <StatusButton
              statusButtonProps={{
                text: "Blue Status",
                blueStatus: true,
              }}
            />
            <StatusButton
              statusButtonProps={{
                text: "Orange Status",
                orangeStatus: true,
              }}
            />
            <StatusButton
              statusButtonProps={{
                text: "Gold Status",
                goldStatus: true,
              }}
            />
            <StatusButton
              statusButtonProps={{
                text: "Aqua Status",
                status: "aquaStatus",
              }}
            />
            <StatusButton
              statusButtonProps={{
                text: "Warning Status",
                status: "warningStatus",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoPage;
