import React from 'react';

type ButtonProps = {
    type: string;
    title: string;
    style?: object;
    onClick: () => void;
};

export const Button: React.FC<ButtonProps> = (props) => {
    const { type, ...restProps } = props;

    switch (type) {
        case 'blue':
            return <BlueButton {...restProps} />;
        default:
            return null;
    }
};


type BlueButtonProps = {
    title: string;
    style?: object;
    onClick: () => void;
};

const BlueButton: React.FC<BlueButtonProps> = ({ title, style, onClick }) => {
    return (
        <div onClick={onClick} className='blue-button' style={style}>
            <div className='blue-button-label'>{title}</div>
        </div>
    );
};
