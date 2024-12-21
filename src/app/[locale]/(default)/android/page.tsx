import ExpandableText from '@/components/UI/primitives/ExpandableText/ExpandableText'
import Instruction from '@/components/Instruction/Instruction'
import Heading from '@/components/UI/primitives/Heading/Heading'
import React from 'react'

import { MobileApplication, WithContext } from "schema-dts";
import Script from 'next/script';
import { getLocale } from 'next-intl/server';

const jsonLd: WithContext<MobileApplication> = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "Undress AI Android App",
  "operatingSystem": "Android",
  "applicationCategory": "PhotoEditingApplication",
  "url": "https://ai-deep-nude.com/android",
  "description": "Download the Undress AI Android app to nudify photos with advanced AI. Experience the best clothes remover and NSFW photo editor, now available on Android!",
  "softwareVersion": "1.0",
  "screenshot": "https://ai-deep-nude.com/Images/android-app-preview.jpg",
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "USD"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AI Deep Nude",
    "url": "https://ai-deep-nude.com",
    "logo": "https://ai-deep-nude.com/Images/Logo.png"
  }
};

export async function generateMetadata() {
    const locale = await getLocale()

    return {
        title: "Undress AI Android App - Download the Best AI Nudify Tool",
        description: "Download the Undress AI Android app to nudify photos with advanced AI. Experience the best clothes remover and NSFW photo editor, now available on Android!",
        openGraph: {
            title: "Undress AI Android App - Download the Best AI Nudify Tool",
            description: "Download the Undress AI Android app to nudify photos with advanced AI. Experience the best clothes remover and NSFW photo editor, now available on Android!",
            url: process.env.NEXT_PUBLIC_URL + "/blog" || "https://ai-deep-nude.com/blog",
            images: process.env.NEXT_PUBLIC_URL ? process.env.NEXT_PUBLIC_URL + "/Images/Metadata/og-image.webp" : "https://ai-deep-nude.com/Images/Metadata/og-image.webp",
            type: "website",
            siteName: "AI Deep Nude - Advanced AI for Nude Photo Editing and NSFW",
            locale: locale
        },
        twitter: {
            card: "summary_large_image",
            title: "Undress AI Android App - Download the Best AI Nudify Tool",
            description: "Download the Undress AI Android app to nudify photos with advanced AI. Experience the best clothes remover and NSFW photo editor, now available on Android!",
            images: process.env.NEXT_PUBLIC_URL ? process.env.NEXT_PUBLIC_URL + "/Images/Metadata/og-image.webp" : "https://ai-deep-nude.com/Images/Metadata/og-image.webp",
            site: "@YourTwitterHandle"
        }
    };
}

const AndroidInstructionPage = () => {
    return (
        <div className='instruction-page'>
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd),
                }}
            />
            <Heading breadcrump={[{ title: "Instruction for Android" }]}>DeepNudeArt app for Android</Heading>
            <Instruction variant="android" />
            <ExpandableText initialHeight={230}>
                <h3>
                    What Makes our Deep Nude AI Unique
                </h3>
                <p>
                    There are a huge number of platforms on the market, which provide the opportunity to use Deep Nude AI. Let&apos;s see how we differ and how we can surprise you.
                </p>
                <h4>
                    What sets us apart from our competitors?
                </h4>
                <p>
                    <b>Impeccable realism</b>: you don&apos;t have to worry about poor quality photos, we guarantee high-quality generation. <br/><br/>
                    <b>Ease of use</b>: we provide a clear interface that will be understandable even if you are a beginner.<br/><br/>
                    <b>Availability</b>: low price and the ability to pay with any card.<br/><br/>
                    <b>Search for inspiration</b>: you can find new paths of development.
                </p>
                <h3>
                    Unlimited Possibilities
                </h3>
                <p>
                    There are many possibilities of use. Because this topic is very broad and suitable for almost everyone. Let&apos;s see for whom or what it can be used:
                </p>
                <h4>
                    What sets us apart from our competitors?
                </h4>
                <p>
                    <b>Research on the work of artificial intelligence</b>: the platform is very revolutionary and will help many people to study ai in the future.<br/><br/>
                    <b>Development of adult content</b>: the platform provides a very safe environment for the absorption of visual content for adults. This content complies with the norms of society.<br/><br/>
                    <b>Creation of art</b>: anyone can feel like a designer or artist who creates something more than just pictures.<br/><br/>
                    Deep Nude AI is not just a tool for creating photos - it is an opportunity to express yourself or discover new skills. Do not miss the offer, because we are opening up new ways and possibilities in the creation and processing of images of naked people. This is a new word in the development of AI and a unique thing that will allow you to engage in art
                </p>
            </ExpandableText>
        </div>
    )
}

export default AndroidInstructionPage