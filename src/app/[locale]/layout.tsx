import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useLocale, useMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import LayoutContainer from './layoutContainer';

const locales = ['en', 'az', 'tr', 'ru'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // it is important
  unstable_setRequestLocale(params?.locale);
  const locale = useLocale();
  const messages = useMessages();

  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html>
      <body>
        <NextIntlClientProvider locale={params?.locale} messages={messages}>
          <LayoutContainer children={children} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
