import Image from "next/image";
import { Card } from "primereact/card";

import { CustomHeader } from "@/components/header";
import { Button } from "@/components/button";

export const StepsCard = (props) => {
    const { parentClassName, parentStyle, stepsCardProps = {} } = props;
    const {
        stepCardClassName,
        stepCardStyle,
        logo,
        topHeaderProps,
        imageProps,
        content,
        bottomHeaderProps
    } = stepsCardProps;

    return (
        <div className={`${parentClassName}`} style={parentStyle}>
            <Card className={`flex justify-content-center align-items-center ${stepCardClassName}`} style={stepCardStyle}>
                {logo ? logo :<></>}
                {topHeaderProps?.text && (
                    <>
                        <CustomHeader customParentClassName="justify-content-center" header={ topHeaderProps.text} headerClass={`text-xl font-bold ${topHeaderProps.className}`}/>
                    </>
                )}
                {imageProps?.src && (
                    <div className="flex justify-content-center">
                    <Image  src={imageProps.src} width={imageProps.width} height={imageProps.height} alt={imageProps.alt}/>
                    </div>
                )}
                {content ? content : <></>}
                {bottomHeaderProps?.text && (
                    <>
                        <CustomHeader header={bottomHeaderProps.text} headerClass={`text-xl font-bold ${bottomHeaderProps.className}`}/>
                    </>
                )}
            </Card>
        </div>
    );
};


export const ContentCard = (props) => {
  const { parentClassName, content } = props;

  return (
    <div className={`${parentClassName}`}>
      <div className="card">
        {content?.map((item, index) => (
          <div className="card-text" key={index}>
            <div className="grid">
              <div className="flex">
                <div className="col-1">
                  <span className="flex justify-end card-title">
                    {item.title}
                  </span>
                </div>
                <div className="col-11 card-description ">
                  <span>{item.description}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="link-style flex justify-end">
          <Button
            buttonProps={{
              text: "詳細を見る",
              link: true,
              custom: "",
            }}
            parentClassName={"custom-details-button"}
          />
        </div>
      </div>
    </div>
  );
};
export default ContentCard;