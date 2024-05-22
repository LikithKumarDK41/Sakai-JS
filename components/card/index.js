import { Card } from "primereact/card";
import { CustomHeader } from "../header";
import Image from "next/image";

export const StepsCard = (props) => {
    const { parentClassName, parentStyle, stepsCardProps = {} } = props;
    const {
        stepCardClassName,
        stepCardStyle,
        topHeaderProps,
        imageProps,
        content,
        bottomHeaderProps
    } = stepsCardProps;

    return (
        <div className={`${parentClassName}`} style={parentStyle}>
            <Card className={`${stepCardClassName} flex justify-content-center align-items-center`} style={stepCardStyle}>
                {topHeaderProps?.text && (
                    <>
                        <CustomHeader header={topHeaderProps.text} headerClass={topHeaderProps.className}/>
                    </>
                )}
                {imageProps?.src && (
                    <>
                    <Image  src={imageProps.src} width={imageProps.width} height={imageProps.height} alt={imageProps.alt}/>
                    </>
                )}
                {content ? content : <></>}
                {bottomHeaderProps?.text && (
                    <>
                        <CustomHeader header={bottomHeaderProps.text} headerClass={bottomHeaderProps.className}/>
                    </>
                )}
            </Card>
        </div>
    );
};