"use client";

import React, { act, useState } from "react";
import { Button, CustomHeader, SelectButton, StatusButton, Steps, StepsCard } from "@/components";

const DemoPage = () => {
  const options = ['Off', 'On'];
  const [value, setValue] = useState(options[0]);

  const [activeIndex, setActiveIndex] = useState(0);

  const itemRenderer = (item, itemIndex) => {
      const isActiveItem = activeIndex === itemIndex;
      const isClickable = itemIndex <= activeIndex;
      const backgroundColor = isActiveItem ? 'var(--primary-color)' : 'var(--surface-b)';
      const textColor = isActiveItem ? 'var(--surface-b)' : 'var(--text-color-secondary)';
      const cursor = isClickable ? 'pointer' : 'not-allowed';

      return (
          <span
              className="inline-flex align-items-center justify-content-center border-circle border-primary border-1 h-3rem w-3rem z-1"
              style={{ backgroundColor, color: textColor, marginTop: '-25px', cursor }}
              onClick={() => isClickable && setActiveIndex(itemIndex)}
          >
              <i className={`${item.icon} text-xl`} />
          </span>
      );
  };

  const items = [
      {
          icon: 'pi pi-user',
          template: (item) => itemRenderer(item, 0)
      },
      {
          icon: 'pi pi-calendar',
          template: (item) => itemRenderer(item, 1)
      },
      {
          icon: 'pi pi-check',
          template: (item) => itemRenderer(item, 2)
      }
  ];

  const renderStepContent = () => {
      switch (activeIndex) {
          case 0:
              return <div>Content for Step 1</div>;
          case 1:
              return <div>Content for Step 2</div>;
          case 2:
              return <div>Content for Step 3</div>;
          default:
              return null;
      }
  };



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
           <Button
            buttonProps={{
              text: "Icon-top",
              forward: true,
              iconPos: "top",
              custom:"h-full"
            }}
          />
           <Button
            buttonProps={{
              text: "Icon-bottom",
              forward: true,
              iconPos: "bottom",
              custom:"h-full"
            }}
          />
          <Button
            buttonProps={{
              text: "Link",
              link:true,
            }}
          />
        </div>
        <div className="mt-2">
          <CustomHeader header="Status Button" />
          <div className="flex gap-2 flex-wrap">
            <StatusButton
              statusButtonProps={{
                text: "Blue Status",
                status: "blueStatus",
              }}
            />
            <StatusButton
              statusButtonProps={{
                text: "Orange Status",
                status: "orangeStatus",
              }}
            />
            <StatusButton
              statusButtonProps={{
                text: "Gold Status",
                status: "goldStatus",
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
        <div className="mt-2">
          <CustomHeader header="Select Button" />
          <div className="flex gap-2 flex-wrap">
            <SelectButton selectButtonProps={{
                value:value,
                onChange:(e) => setValue(e.value),
                options:options
            }}/>
            <p>{value =="On"?"You clicked On Button":"You clicked Off Button" }</p>
          </div>
        </div>
        <div className="mt-2">
          <CustomHeader header="Steps" />
          <div className="">
          <Steps stepsProps={{
              items:items,
              activeIndex:activeIndex,
              readOnly:false
            }}/>            <div className="mt-3">
                {renderStepContent()}
            </div>
            {activeIndex < items.length - 1 && (
                <button onClick={() => setActiveIndex(activeIndex + 1)}>
                    Complete Step {activeIndex + 1}
                </button>
            )}
          </div>
        </div>
        <div className="mt-2">
            <StepsCard stepsCardProps={{
              topHeaderProps:{
                text:"Sandeep"
              },
              content:<p>Hi <br/> sandeep</p>,
              stepCardStyle:{background: '#FDEEEA'},
              stepCardClassName:"w-5",
              imageProps:{
                src:"/layout/images/handshake.png",
                width:"100",
                height:"80",
              }
            }} parentClassName="flex justify-content-center"/>
        </div>
      </div>
    </>
  );
};

export default DemoPage;
