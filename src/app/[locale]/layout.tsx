

import type { Metadata } from "next";
import { Manrope, Inter, Roboto_Mono } from "next/font/google"
import "@/styles/index.scss";
import { getLocale, getMessages, getNow, getTimeZone } from "next-intl/server";
import Providers from "./providers/providers";
import { ClerkProvider } from "@clerk/nextjs";
import IntlProvider from "./providers/IntlProvider";
import { GoogleTagManager } from '@next/third-parties/google'
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";




export const metadata: Metadata = {
  title: {
    template: "%s | AI deepnude",
    default: "AI Deep Nude - Advanced AI for Photo Editing and NSFW | AI deepnude"
  },
  appleWebApp: {
    title: "AI Deep Nude com"
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || "https://ai-deep-nude.com")
};

// export async function generateMetadata({
//   params: {locale}
// }: Readonly<{
//   params: {locale: string};
// }>) {
//   const pathname = usePathname();

//   return {
//     title: {
//       template: "%s | AI deepnude",
//       default: "AI Deep Nude - Advanced AI for Photo Editing and NSFW | AI deepnude"
//     },
//     metadataBase: new URL(process.env.NEXT_PUBLIC_URL || "https://ai-deep-nude.com"),
//     alternates: {
//       canonical: pathname,
//     },
//   };
// }

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
})
const fontManrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
})
const fontRobotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap"
})

export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  const messages = await getMessages();
  const localeIntl = await getLocale();
  const now = await getNow();
  const timeZone = await getTimeZone();
  console.log(locale, localeIntl)
  return (
		<ClerkProvider>
			<html
				lang={locale}
				className={`${fontInter.variable} ${fontManrope.variable} ${fontRobotoMono.variable}`}
			>
				<head>
					<meta name='robots' content='noindex,nofollow' />
					<GoogleTagManager gtmId='GTM-WFSLSNZG' />
				</head>
				<body>
					<IntlProvider
						messages={messages}
						locale={localeIntl}
						now={now}
						timeZone={timeZone}
					>
						<Providers>
							<main>
								{children}
							</main>
						</Providers>
					</IntlProvider>
				</body>
			</html>
		</ClerkProvider>
	)
}
