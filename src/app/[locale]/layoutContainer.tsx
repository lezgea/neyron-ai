'use client';
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import { SnackbarProvider } from 'notistack';

import ErrorIcon from 'src/assets/images/errorNotification.svg';
import SuccessIcon from 'src/assets/images/successNotification.svg';
import { StyledMaterialDesignContent } from 'src/utils/notistakStyles';

import Footer from './components/partials/Footer';
import Header from './components/partials/Header';

import '../../styles/App.scss';
import ScrollTop from './components/partials/ScrollTop';

interface ContextProps {
  userIsActive: boolean;
  setUserIsActive: Dispatch<SetStateAction<boolean>>;
  selectedLanguage: string;
  setSelectedLanguage: Dispatch<SetStateAction<string>>;
}

export const LayoutContext = createContext<ContextProps>({
  userIsActive: false,
  setUserIsActive: () => {},
  selectedLanguage: '',
  setSelectedLanguage: () => {},
});

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'az' }, { locale: 'tr' }, { locale: 'ru' }];
}

export default function LayoutContainer({ children }: { children: ReactNode }) {
  const locale = useLocale();
  const [userIsActive, setUserIsActive] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(locale);
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

  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get('s')) {
      window.localStorage.setItem('source', searchParams.get('s') as string);
    }
    if (searchParams.get('c')) {
      window.localStorage.setItem('campaignId', searchParams.get('c') as string);
    }
  }, []);

  return (
    <LayoutContext.Provider value={{ userIsActive, setUserIsActive, selectedLanguage, setSelectedLanguage }}>
      <QueryClientProvider client={queryClient}>
        <Header />
        <ScrollTop />
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
          {children}
        </SnackbarProvider>
        <Footer />
      </QueryClientProvider>
    </LayoutContext.Provider>
  );
}
