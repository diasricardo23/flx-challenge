import { ReactElement } from "react";
import { I18nProviderClient } from "@/locales/client";
import QueryProvider from '@/providers/queryProvider'
import "./globals.css";

export default async function LocaleLayout({ params, children }: { params: Promise<{ locale: string }>, children: ReactElement }) {
  const { locale } = await params
 
  return (
    <I18nProviderClient locale={locale}>
      <QueryProvider>
        {children}
      </QueryProvider>
    </I18nProviderClient>
  )
}
