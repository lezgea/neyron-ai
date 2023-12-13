import Footer from 'src/components/footer';
import Header from 'src/components/header';
import TanStackProvider from 'src/components/providers/TanStackProvider';

import '../styles/App.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
