"use client";

import { ContentHeader, CustomHeader } from "@/components";
import React, { useState } from "react";

const Demo = () => {
  return (
    <>
      <div className="m-2">
        {/* <CustomHeader header="Content Header" /> */}
        <ContentHeader
          headerText={"注文番号"}
          contentText={"1000105"}
          buttonText={"ピッキング"}
          buttonSymbol
          status="warningStatus"
          parentClassName="header_class"
        />
      </div>
    </>
  );
};
export default Demo;
