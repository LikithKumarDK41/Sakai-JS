import React, { useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';

export const InputFile = (props) => {
    const { t } = useTranslation('translation');
    const {
        parentClass,
        parentStyle,
        inputFileProps = {}
    } = props;
    const {
        name,
        height,
        inputFileClass,
        accept,
        onChange,
        onBlur,
        ref,
        inputFileStyle,
        placeholder,
        value,
        required,
        readOnly,
        disabled,
        custom,
        buttonText,
        ...restProps
    } = inputFileProps;

    const divStyle = {
        // You can adjust the border style as needed
        padding: '10px', // Add padding for spacing
        ...parentStyle, // Allow overriding styles from props
    };
    const [selectedFileName, setSelectedFileName] = useState('');
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFileName(file ? file.name : '');
        if (onChange) {
            onChange(event);
        }
    };
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className={`input-parent-file-border bg-white ${parentClass}`} style={divStyle}>
            <input type="file"
                name={name}
                className={`${inputFileClass} ${custom || 'input_file'} ${height || 'custom_input'}`}
                accept={accept}
                onChange={handleFileChange}
                onBlur={onBlur}
                ref={fileInputRef}
                style={{ display: 'none' }}
                value={value}
                required={required}
                readOnly={readOnly}
                disabled={disabled}
                {...restProps}
            />
            <button
                type='button'
                className={`${inputFileClass} ${custom || 'input_file'} ${height || 'custom_input'}`}
                onClick={handleButtonClick}
            >{buttonText || t('file_choose')}
            </button>
            <span className='pl-2' style={{ wordBreak: "break-word" }}>
                {selectedFileName || placeholder}
            </span>
        </div>
    );
};