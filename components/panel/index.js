import React, { useState } from 'react';
import { Panel as PanelsList } from 'primereact/panel';

export const Panel = ({ panelsData }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };
    return (
        <div>
            {panelsData.map((panel, index) => (
                <PanelsList key={index} 
                headerTemplate={panel.headerTemplate} 
                header={panel.header} 
                toggleable
                collapsed={activeIndex !== index}
                onToggle={() => handleToggle(index)}
                >
                    <div className="p-3">
                        {panel.content}
                    </div>
                </PanelsList>
            ))}
        </div>
    );
};