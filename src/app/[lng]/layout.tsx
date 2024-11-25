import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import '../../styles/global.scss';
import 'tailwindcss/tailwind.css';
import { Footer, Header, Loader } from "components";
import ReduxProvider from "providers/redux-provider";
import ToastProvider from "@providers/toast-provider";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from "next-intl/server";
import { FullpageApiProvider } from "@providers/fullpage-api-provider";


const poppins = Poppins({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700", "800", "900"] }); // Specify weights if needed


export const metadata: Metadata = {
  title: "Neyron.ai",
  description: "Neyron is an innovative platform designed to bring data scientists and Al enthusiasts together to compete in data-driven challenges.",
};

export default async function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { slug?: string, lng: string };
}) {

  const messages = await getMessages();

  return (
    <html lang={lng}>
      <head>
        {/* Link to the favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${poppins.className}`}>
        <NextIntlClientProvider messages={messages}>
          <FullpageApiProvider>
            <ReduxProvider>
              <ToastProvider>
                <div className="relative min-h-screen">
                  <Header />
                  {children}
                </div>
                <Footer />
              </ToastProvider>
            </ReduxProvider>
          </FullpageApiProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
