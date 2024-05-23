import React, { useState } from 'react';
import { Panel as PanelsList } from 'primereact/panel';
import { BsFillQuestionCircleFill } from 'react-icons/bs';

export const Panel = ({ panelsData }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };

    const defaultHeaderTemplate  = (options,header,customClassName) => {
        const className = `${options.className} ${customClassName} justify-content-space-between`;

        return (
            <div className={className}>
                <div className="flex align-items-center gap-2">
                    <BsFillQuestionCircleFill size="20"/>
                    <span className="font-bold">{header}</span>
                </div>
                <div>
                    
                    {options.togglerElement}
                </div>
            </div>
        );
    };
    return (
        <div>
            {panelsData.map((panel, index) => (
                <PanelsList key={index} 
                headerTemplate={(options) => panel.headerTemplate ? panel.headerTemplate(options) : defaultHeaderTemplate(options, panel.header,panel.headerClassName)}
                header={panel.header} 
                toggleable
                collapsed={activeIndex !== index}
                onToggle={() => handleToggle(index)}
                >
                    <div className="flex gap-2">
                     <i className='pi pi-reply'></i>   {panel.content}
                    </div>
                </PanelsList>
            ))}
        </div>
    );
};