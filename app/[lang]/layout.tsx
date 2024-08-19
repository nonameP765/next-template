import './globals.css';

import React from 'react';
import { i18n } from '@/i18n';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function LocaleLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={lang}>
      <body className='pretendard-bold-30-130'>{children}</body>
    </html>
  );
}
