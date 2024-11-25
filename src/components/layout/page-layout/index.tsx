import React from 'react';


export interface IPageLayout {
    children: React.ReactNode,
}

const PageLayout: React.FC<IPageLayout> = ({
    children,
}) => {
    return (
        <div className="w-screen min-h-screen flex flex-col">
            <a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>
            <main id="main-content" className="flex-grow">
                {children}
            </main>
        </div>
    );
};

export default PageLayout;
