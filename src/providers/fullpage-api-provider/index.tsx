"use client";

import React, { createContext, useContext, useRef, ReactNode, MutableRefObject } from 'react';

interface FullpageApiContextProps {
    current: any;
}

const FullpageApiContext = createContext<MutableRefObject<FullpageApiContextProps | null> | null>(null);

export const useFullpageApi = () => {
    const context = useContext(FullpageApiContext);
    if (!context) {
        throw new Error('useFullpageApi must be used within a FullpageApiProvider');
    }
    return context;
};

export const FullpageApiProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const fullpageApiRef = useRef<FullpageApiContextProps | null>(null);

    return (
        <FullpageApiContext.Provider value={fullpageApiRef}>
            {children}
        </FullpageApiContext.Provider>
    );
};
