import React, { createContext, useContext, useRef, ReactNode, MutableRefObject } from 'react';

interface FullpageApiContextProps {
    current: any;
}

const FullpageApiContext = createContext<MutableRefObject<FullpageApiContextProps | null>>(null);

export const useFullpageApi = () => useContext(FullpageApiContext);

export const FullpageApiProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const fullpageApiRef = useRef<FullpageApiContextProps | null>(null);

    return (
        <FullpageApiContext.Provider value={fullpageApiRef}>
            {children}
        </FullpageApiContext.Provider>
    );
};