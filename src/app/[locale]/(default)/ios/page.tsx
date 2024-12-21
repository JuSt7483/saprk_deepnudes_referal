import ExpandableText from '@/components/UI/primitives/ExpandableText/ExpandableText'
import Instruction from '@/components/Instruction/Instruction'
import Heading from '@/components/UI/primitives/Heading/Heading'
import React from 'react'
import Script from 'next/script';
import { getLocale } from 'next-intl/server';
import { MobileApplication, WithContext } from "schema-dts";

const jsonLd: WithContext<MobileApplication> = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "Undress AI iOS App",
  "operatingSystem": "iOS",
  "applicationCategory": "PhotoEditingApplication",
  "url": "https://ai-deep-nude.com/ios",
  "description": "Download the Undress AI iOS app for iPhone and iPad to nudify photos with advanced AI. Experience the best clothes remover and NSFW photo editor for iOS.",
  "softwareVersion": "1.0",
  "screenshot": "https://ai-deep-nude.com/images/ios-app-preview.jpg",
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "USD"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AI Deep Nude",
    "url": "https://ai-deep-nude.com",
    "logo": "https://ai-deep-nude.com/images/logo.png"
  }
};

export async function generateMetadata() {
    const locale = await getLocale()

    return {
        title: "Undress AI iOS App - Download the Best AI Nudify Tool for iPhone",
        description: "Download the Undress AI iOS app for iPhone and iPad to nudify photos with advanced AI. Experience the best clothes remover and NSFW photo editor for iOS.",
        openGraph: {
            title: "Undress AI iOS App - Download the Best AI Nudify Tool for iPhone",
        description: "Download the Undress AI iOS app for iPhone and iPad to nudify photos with advanced AI. Experience the best clothes remover and NSFW photo editor for iOS.",
            url: process.env.NEXT_PUBLIC_URL + "/blog" || "https://ai-deep-nude.com/blog",
            images: process.env.NEXT_PUBLIC_URL ? process.env.NEXT_PUBLIC_URL + "/Images/Metadata/og-image.webp" : "https://ai-deep-nude.com/Images/Metadata/og-image.webp",
            type: "website",
            siteName: "AI Deep Nude - Advanced AI for Nude Photo Editing and NSFW",
            locale: locale
        },
        twitter: {
            card: "summary_large_image",
            title: "Undress AI iOS App - Download the Best AI Nudify Tool for iPhone",
        description: "Download the Undress AI iOS app for iPhone and iPad to nudify photos with advanced AI. Experience the best clothes remover and NSFW photo editor for iOS.",
            images: process.env.NEXT_PUBLIC_URL ? process.env.NEXT_PUBLIC_URL + "/Images/Metadata/og-image.webp" : "https://ai-deep-nude.com/Images/Metadata/og-image.webp",
            site: "@YourTwitterHandle"
        }
    };
}

const IosInstructionPage = () => {
    return (
        <div className='instruction-page'>
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd),
                }}
            />
            <Heading breadcrump={[{ title: "Instruction for IOS" }]}>DeepNudeArt app for iOS</Heading>
            <Instruction variant="ios" />
            <ExpandableText initialHeight={230}>
                <h3>
                    Benefits for Users
                </h3>
                <p>
                    Deep nude ai is a cutting- edge technology that has undeniable advantages for users.
                </p>
                <p>
                    <b>Saving time and resources</b>: people who edit images spend a lot of time drawing and modeling. Deep Nude AI automates these processes and creates images very quickly and efficiently, which helps save time that can be spent on other things.<br/><br/>
                    <b>Opens up new horizons for imagination</b>: expanding the creative horizons of users, giving them a wide range of tools for work.<br/><br/>
                    <b>Quality of work</b>: we guarantee high quality of generated images, our service is very sensitive to your image and its quality.<br/><br/>
                    <b>Affordable price</b>: we offer you several tariffs at an affordable price, you can choose any tariff but also you can use our ai undresser free.<br/><br/>
                    <b>Possibility of free use</b>: we understand that you need to test the technology, so we provide some features for free.<br/><br/>
                    <b>For everyone</b>: whether you are just a beginner and starting your journey or a living professional in this business, it does not matter. We offer you an intuitive interface that will help with your ideas.
                    <b>Bonuses</b>: invite friends and get bonuses to your account.
                </p>
                <p>
                    Of course, these are not all the advantages, because every day we work and add new features.<br/><br/>
                    Nudes generator AI is a tool that can significantly improve work efficiency, expand creative possibilities, and provide high-quality results. You can check it out yourself right now. Try all our features and do ai pics naked!
                </p>
            </ExpandableText>
        </div>
    )
}

export default IosInstructionPage