import TanStackProvider from 'src/components/providers/TanStackProvider';
import '../styles/App.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>{children}</TanStackProvider>
      </body>
    </html>
  );
}
