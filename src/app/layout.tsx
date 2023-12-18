import Footer from 'src/components/footer/footer';
import Header from 'src/components/header/header';

import '../styles/App.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
