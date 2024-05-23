import React, { useEffect } from "react";
import { Button } from "@/components/button";
export const CustomCard = (props) => {
  const { parentClassName, cardProps = {} } = props;
  const { content, value, card } = cardProps;
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <div className={`${parentClassName}`}>
      <div className="card">
        {props.content?.map((item, index) => (
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
export default CustomCard;
