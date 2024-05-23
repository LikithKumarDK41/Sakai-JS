"use client";
import { ContentHeader, CustomHeader } from "@/components";
import CustomCard from "@/components/cardContent";
import React, { useState } from "react";
const Demo = () => {
  const contentData = [
    { title: "配布部数 :", description: "2,000部" },
    { title: "配布予定期間 :", description: "10月10日〜10月11日" },
    {
      title: "発注日 :",
      description: "2024年10月10日",
    },
  ];
  return (
    <>
      <div className="mt-2">
        {/* <CustomHeader header="Content Header" /> */}
        <ContentHeader
          headerText={"注文番号"}
          contentText={"1000105"}
          buttonText={"ピッキング"}
          buttonSymbol
          status="warningStatus"
          parentClassName="header_class"
        />

        <CustomCard parentClassName="custom-card" content={contentData} />
      </div>
    </>
  );
};
export default Demo;
