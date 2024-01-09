'use client';
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Image from 'next/image';
import { SnackbarProvider } from 'notistack';

import ErrorIcon from 'src/assets/images/errorNotification.svg';
import SuccessIcon from 'src/assets/images/successNotification.svg';
import { ISelectedLanguage } from 'src/types';
import { StyledMaterialDesignContent } from 'src/utils/notistakStyles';

import Footer from './components/footer/footer';
import Header from './components/header/header';

import '../../styles/App.scss';

interface ContextProps {
  userIsActive: boolean;
  setUserIsActive: Dispatch<SetStateAction<boolean>>;
  selectedLanguage: ISelectedLanguage;
  setSelectedLanguage: Dispatch<SetStateAction<ISelectedLanguage>>;
}

export const LayoutContext = createContext<ContextProps>({
  userIsActive: false,
  setUserIsActive: () => {},
  selectedLanguage: { id: 1, name: 'English', abbreviation: 'en' },
  setSelectedLanguage: () => {},
});

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'az' }];
}

export default function LayoutContainer({ children }: { children: ReactNode }) {
  const [userIsActive, setUserIsActive] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    id: 1,
    name: 'English',
    abbreviation: 'en',
  });

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 60 * 60 * 24,
        retry: false,
        staleTime: Infinity,
        retryDelay: (failureCount) => failureCount * 1000,
      },
    },
  });

  return (
    <LayoutContext.Provider value={{ userIsActive, setUserIsActive, selectedLanguage, setSelectedLanguage }}>
      <QueryClientProvider client={queryClient}>
        <Header />
        <SnackbarProvider
          iconVariant={{
            success: <Image src={SuccessIcon} alt="success" />,
            error: <Image src={ErrorIcon} alt="error" />,
          }}
          Components={{
            success: StyledMaterialDesignContent,
            error: StyledMaterialDesignContent,
          }}
          anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
        >
          <main>{children}</main>
        </SnackbarProvider>
        <Footer />
      </QueryClientProvider>
    </LayoutContext.Provider>
  );
}
