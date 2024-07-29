import React from 'react';

type ButtonProps = {
    type: string;
    title: string;
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
    onClick: () => void;
};

const BlueButton: React.FC<BlueButtonProps> = ({ title, onClick }) => {
    return (
        <div onClick={onClick} className='blue-button'>
            {title}
        </div>
    );
};
