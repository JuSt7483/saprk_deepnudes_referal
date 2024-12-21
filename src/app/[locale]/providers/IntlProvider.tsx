"use client";
 
import {AbstractIntlMessages, NextIntlClientProvider} from 'next-intl';
 
export default function IntlProvider({
  messages,
  children,
  locale,
  now,
  timeZone
} :
{
    messages: AbstractIntlMessages,
    children: React.ReactNode,
    locale: string,
    now: Date,
    timeZone: string
}) {
    return (
        <NextIntlClientProvider
            defaultTranslationValues={{
                br: () => <br></br>,
                b: (str) => <b>{str}</b>
            }}
            messages={messages}
            now={now}
            locale={locale}
            timeZone={timeZone}
        >
            {children}
        </NextIntlClientProvider>
    );
}