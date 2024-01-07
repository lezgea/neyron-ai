'use client';
import { QueryClient, QueryClientProvider } from 'react-query';

import Footer from 'src/components/footer/footer';
import Header from 'src/components/header/header';

import '../styles/App.scss';
import { SnackbarProvider } from 'notistack';
import { StyledMaterialDesignContent } from 'src/utils/notistakStyles';
import SuccessIcon from 'src/assets/images/successNotification.svg';
import ErrorIcon from 'src/assets/images/errorNotification.svg';
import Image from 'next/image';
export default function RootLayout({ children }: { children: React.ReactNode }) {
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
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <Header />{' '}
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
      </body>
    </html>
  );
}
