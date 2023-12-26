'use client';
import { QueryClient, QueryClientProvider } from 'react-query';

import Footer from 'src/components/footer/footer';
import Header from 'src/components/header/header';

import '../styles/App.scss';

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
        <Header />{' '}
        <QueryClientProvider client={queryClient}>
          <main>{children}</main>
        </QueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
