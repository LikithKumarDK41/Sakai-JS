import { Card } from "primereact/card";
import { CustomHeader } from "../header";
import Image from "next/image";

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