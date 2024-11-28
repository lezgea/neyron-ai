import React from 'react';


interface IButtonProps {
    style?: "primary" | "black" | "outlined",
    size?: "large" | "medium" | "small" | "tiny",
    type?: "button" | "submit",
    label: string,
    onClick?: () => void,
}

export const Button: React.FC<IButtonProps> = (props) => {
    let { style, type = "button", size = "medium", label, onClick } = props;

    const SIZES = {
        tiny: 'text-sm px-3 md:px-5 py-2 min-w-[50px]',
        small: 'text-md px-3 md:px-5 py-2 min-w-[60px]',
        medium: 'text-md px-4 md:px-6 py-3 min-w-[120px]',
        large: 'text-xl px-5 md:px-8 py-4 min-w-[120px]',
    }

    switch (style) {
        case 'primary':
            return (
                <button
                    type={type}
                    onClick={onClick}
                    className={`${SIZES[size]} inline-flex w-auto font-regmed text-center items-center justify-center text-dark transition-all bg-primary rounded-full hover:bg-gradient-to-r hover:from-purple hover:to-purpleLight bg-[length:100%_100%] hover:animate-gradient-slide shadow-neutral-300 dark:shadow-neutral-700 hover:text-white hover:shadow-sm hover:shadow-neutral-300 hover:-tranneutral-y-px focus:shadow-none`}
                >
                    {label}
                </button>
            )
        case 'black':
            return (
                <button
                    type={type}
                    onClick={onClick}
                    className={`${SIZES[size]} inline-flex w-auto text-center items-center justify-center text-white transition-all duration-500 bg-dark rounded-full sm:w-auto shadow-neutral-300 dark:shadow-neutral-700 hover:shadow-sm hover:shadow-neutral-300 focus:shadow-none hover:bg-gradient-to-r hover:from-purple hover:to-purpleLight bg-[length:100%_100%] hover:animate-gradient-slide hover:text-white`}
                >
                    {label}
                </button>
            )
        case 'outlined':
            return (
                <button
                    type={type}
                    onClick={onClick}
                    className={`${SIZES[size]} inline-flex w-auto text-center items-center justify-center text-white transition-all duration-500 bg-dark rounded-full sm:w-auto shadow-neutral-300 dark:shadow-neutral-700 hover:shadow-sm hover:shadow-neutral-300 focus:shadow-none hover:bg-gradient-to-r hover:from-purple hover:to-purpleLight bg-[length:100%_100%] hover:animate-gradient-slide hover:text-white`}
                >
                    {label}
                </button>
            )
        default:
            return (
                <button
                    type={type}
                    onClick={onClick}
                    className={`${SIZES[size]} inline-flex w-auto font-regmed text-center items-center  justify-center text-white transition-all rounded-full hover:bg-gradient-to-r from-purple to-purpleLight bg-gradient-to-r hover:from-primaryDark hover:to-primary shadow-neutral-300 hover:text-white hover:shadow-sm hover:shadow-neutral-300 hover:-tranneutral-y-px focus:shadow-none`}
                >
                    {label}
                </button>
            )
    }
}