import '../styles/App.scss';
import Navbar from 'src/components/Navbar.jsx';
import TanStackProvider from 'src/components/providers/TanStackProvider';

import '../styles/App.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <TanStackProvider>{children}</TanStackProvider>
      </body>
    </html>
  );
}
