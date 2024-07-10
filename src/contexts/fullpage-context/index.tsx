import React, { createContext, MutableRefObject, ReactNode, useContext, useRef } from 'react';

interface FullpageApiContextType {
    current: any;
}

const FullpageApiContext = createContext<FullpageApiContextType | null>(null);

export const useFullpageApi = (): MutableRefObject<any> => {
    const context = useContext(FullpageApiContext);
    if (!context) {
        throw new Error('useFullpageApi must be used within a FullpageApiProvider');
    }
    return context;
};

interface FullpageApiProviderProps {
    children: ReactNode;
}

export const FullpageApiProvider: React.FC<FullpageApiProviderProps> = ({ children }) => {
    const fullpageApiRef = useRef<any>(null);

    return (
        <FullpageApiContext.Provider value={fullpageApiRef}>
            {children}
        </FullpageApiContext.Provider>
    );
};
