"use client";
import React from "react";

import { ContentCard, ContentHeader } from "@/components";

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
        <ContentHeader
          headerText={"注文番号"}
          contentText={"1000105"}
          buttonText={"ピッキング"}
          buttonSymbol
          status="warningStatus"
          parentClassName="header_class"
        />
        <ContentCard parentClassName="content-card" content={contentData}  />
      </div>
    </>
  );
};

export default Demo;