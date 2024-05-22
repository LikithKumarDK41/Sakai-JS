"use client";

import { ContentHeader } from "@/components";
import React from "react";

const Demo = () => {
  return (
    <>
      <div className="m-2">
        <ContentHeader  contentHeaderProps={{
            headerText:"注文番号",
            contentText:"100105",
            buttonText:"ピッキング",
            buttonSymbol,
            status:"warningStatus"
        }} 
          parentClassName="header_class"
        />
      </div>
    </>
  );
};

export default Demo;