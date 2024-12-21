import Button from "@/components/UI/primitives/Button/Button";
import "./style.scss";
import { BodyIcon, EmojiFireIcon, HangerIcon, ImageIcon, LinePath1, LinePath2, LoginIcon, MagicStic3, StarElement, TitsIcon, UserPlusIcon } from "@/components/UI/svg";
import Image from "next/image"

import IphoneImage from "../../../public/Images/Home/ai nudity app.png"
import Iphone2Image from "../../../public/Images/Home/ai babes naked.png"
import ReferalBackground from "../../../public/Images/Home/clothoffapp.png"
import GirlUndressBackground from "../../../public/Images/Home/nudifier app download.png"

import Video from 'next-video';
import GirlVideo from "../../../videos/home-animation-new.mp4"

import PricingCard from "@/components/PricingCard/PricingCard";
import { Accordion } from "@/components/Accordion/Accordion";
import { useTranslations } from "next-intl";
import Footer from "@/components/Footer/Footer";
import Slider from "@/components/Slider/Slider";
import Header from "@/components/Header/Header";
import ImageGrid from "@/components/ImageGrid/ImageGrid";
import ExpandableText from "@/components/UI/primitives/ExpandableText/ExpandableText";
import { Metadata } from "next";
import { WebSite, WithContext } from "schema-dts";
import Script from "next/script";
import SingleQuestion from "@/components/Accordion/SingleQuestion";
import {getLocale, getTranslations} from "next-intl/server";
import {getStrapiData} from "@/shared/actions/getStrapiData";
import BlogItem from "@/components/BlogItem/BlogItem";

const jsonLd: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "AI Deep Nude - Advanced AI for Nude Photo Editing and NSFW",
  "url": process.env.NEXT_PUBLIC_URL || "https://ai-deep-nude.com",
  "description": "Create AI Nude photos enhanced by artificial intelligence with AI Deep Nude. Our clothoff app allows you to nude and remove clothing from any photos, using nudify ai technology to remove clothing and create NSFW images.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://ai-deep-nude.com/search?q={search_term_string}",
    // "query-input": "required name=search_term_string"
  },
  "sameAs": [
    "https://twitter.com/YourTwitterHandle",
    "https://facebook.com/YourPageHandle"
  ]
};

export const metadata: Metadata = {
  description: "Create AI nude photos with AI Deep Nude. Use our advanced AI nudify technology to remove clothing and generate NSFW images quickly and easily online.",
  openGraph: {
    title: "AI Deep Nude - Advanced AI for Nude Photo Editing and Creativity",
    description: "Create AI Nude photos enhanced by artificial intelligence with AI Deep Nude. Our clothoff app allows you to nude and remove clothing from any photos, using nudify ai technology to remove clothing and create NSFW images.",
    url: process.env.NEXT_PUBLIC_URL || "https://ai-deep-nude.com",
    images: process.env.NEXT_PUBLIC_URL ? process.env.NEXT_PUBLIC_URL + "/Images/Metadata/og-image.webp" : "https://ai-deep-nude.com/Images/Metadata/og-image.webp",
    type: "website",
    siteName: "AI Deep Nude - Advanced AI for Nude Photo Editing and NSFW"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Deep Nude - Advanced AI for Nude Photo Editing and Creativity",
    description: "Create AI Nude photos enhanced by artificial intelligence with AI Deep Nude. Our clothoff app allows you to nude and remove clothing from any photos, using nudify ai technology to remove clothing and create NSFW images.",
    images: process.env.NEXT_PUBLIC_URL ? process.env.NEXT_PUBLIC_URL + "/Images/Metadata/og-image.webp" : "https://ai-deep-nude.com/Images/Metadata/og-image.webp",
    site: "@YourTwitterHandle"
  }
};

export default async function HomePage() {
  const t = await getTranslations("HomePage");
  const locale = await getLocale();
  const strapiDataPosts = await getStrapiData(`/api/articles?sort[0]=order:asc&populate=*&locale=${locale}`);
  console.log(strapiDataPosts)
  const {data} = strapiDataPosts;

  return (
      <>
        <Script
            id="faq-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(jsonLd),
            }}
        />
        <div className="home">
          <div className="home__inner layout-home container-large">
            <div className="layout-home__not-scrollable">
              <ImageGrid/>
            </div>
            <div className="layout-home__scrollable">
              <div className="layout-home__first">
                <Header variant="home"/>
                <section className="home-mobile">
                  <Slider className="visible-tablet"/>
                </section>
                <section className="home-banner">
                  <div className="home-banner__info">
                    <div className="icon home-banner__info-icon">
                      <MagicStic3/>
                    </div>
                    <div className="home-banner__info-text">
                      <h1 className="home-banner__heading-text">
                        {t.rich('banner.heading.text')}
                      </h1>
                      <div className="home-banner__info-description">
                        <p>
                          {t('banner.info.description')}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="home-banner__buttons">
                  <Button href="/login" iconLeft={<LoginIcon/>} color="white" className="home-banner__buttons-item">
                    {t('banner.heading.button-login')}
                  </Button>
                  <Button href="/generation" iconLeft={<HangerIcon/>} className="home-banner__buttons-item">
                    {t('banner.heading.button')}
                  </Button>
                </div>
              </div>
              <section className="home-features">
                <ul className="home-features__list">
                  <li className="home-features__item">
                    <div className="icon home-features__icon">
                      <TitsIcon/>
                    </div>
                    <div className="home-features__item-text">
                      <div className="home-features__heading">
                        {t('features.1.heading')}
                      </div>
                      <div className="home-features__description">
                        {t('features.1.description')}
                      </div>
                    </div>
                  </li>
                  <li className="home-features__item">
                    <div className="icon home-features__icon">
                      <ImageIcon/>
                    </div>
                    <div className="home-features__item-text">
                      <div className="home-features__heading">
                        {t('features.2.heading')}
                      </div>
                      <div className="home-features__description">
                        {t('features.2.description')}
                      </div>
                    </div>
                  </li>
                  <li className="home-features__item">
                    <div className="icon home-features__icon">
                      <BodyIcon/>
                    </div>
                    <div className="home-features__item-text">
                      <div className="home-features__heading">
                        {t('features.3.heading')}
                      </div>
                      <div className="home-features__description">
                        {t('features.3.description')}
                      </div>
                    </div>
                  </li>
                  <div className="circle home-features__circle home-features__circle--1"></div>
                  <div className="circle home-features__circle home-features__circle--2"></div>
                </ul>
                <h2>Features and tools for work</h2>
                <ExpandableText>
                  <p>
                    Deep Nude AI, like similar technologies, is developed to work with images. And of course, there are
                    key functions that are part of such inventions related to artificial intelligence. There are a huge
                    number of functions, and all of them are very important for the smooth operation of our service.
                    Without one, there will be no other, so let&apos;s look at the key functions of our site and figure
                    out what you can use for pleasant work in remove clothes ai.
                  </p>
                  {/* <h5>Features:</h5>
                  <p>
                  Image Generation: AI is equipped with advanced algorithms that can be used to create realistic photos based on existing ones. <br></br>
                  Editing and Personalizing Content: you can create unique photos, thanks to a huge number of tools. All tools are easy to use due to the user-friendly interface. <br></br>
                  Pro Tools: if you are an advanced user, we offer a wide range of tools that are suitable for professionals. <br></br>
                  </p> */}
                  <h3>Tools for work:</h3>
                  <ol>
                    <li>
                      <b>Color and other elements</b>: background, new elements, adjust colors and lighting, various
                      filters and effects;
                    </li>
                    <li>
                      <b>Resize</b>: any size of your image is available;
                    </li>
                    <li>
                      <b>Templates</b>: choose any template from the presented ones;
                    </li>
                    <li>
                      <b>Change of</b>: pose, lighting, background, and clothing elements.
                    </li>
                  </ol>
                  <p>
                    This platform is unique in its number of tools, approach to users and their photos. We care about
                    our service and want it to develop. Experiment with all the tools, find your favorites, and create
                    beautiful photos with us!
                  </p>
                </ExpandableText>
              </section>
              <section className="home-celebrity">
                <div className="home-celebrity__image-wrapper">
                  <Video src={GirlVideo} autoPlay controls={false} loop muted playsInline />
                  <div className="home-celebrity__image-before"></div>
                  <div className="home-celebrity__image-circle"></div>
                </div>
                <div className="home-celebrity__text">
                  <h2 className="home-celebrity__heading">
                    {t('celebrity.heading')}
                  </h2>пр
                  <div className="home-celebrity__description">
                    {t('celebrity.description')}
                  </div>
                </div>
                <Button iconLeft={<HangerIcon/>} className="home-celebrity__button">
                  {t('celebrity.button')}
                </Button>
              </section>
              <hr style={{margin: 40, height: 1}}/>
              <section className="home-pricing">
                <h5 className="home-pricing__heading">
                  {t('pricing.heading')}
                </h5>
                <ul className="home-pricing__list">
                  <PricingCard
                      id={"1"}
                      title={"starter"}
                      price={2.99}
                      description={[
                        "Save 50%",
                        "Best Value",
                      ]}
                      benefits={[
                        "5 coins = 5 requests",
                        "Without a queue",
                        "1 photo worth 58.6₽",
                        "High-quality photos",
                      ]}
                  />
                  <PricingCard
                      id={"1"}
                      title={"PRO"}
                      price={2.99}
                      description={[
                        "Save 50%",
                        "Best Value",
                      ]}
                      benefits={[
                        "Unlimited fun: 20 coins = 20 requests",
                        "The cost of one photo is 44.05₽",
                        "Adjust the volume of photos at your discretion",
                        "Unique features",
                        "Access to unique categories of photos",
                        "High quality and realism",
                        "Instant generation and an unforgettable impression",
                      ]}
                      isPopular
                  />
                  <PricingCard
                      id={"1"}
                      title={"Basic"}
                      price={2.99}
                      description={[
                        "Save 50%",
                        "Best Value",
                      ]}
                      benefits={[
                        "As many as 80 coins = 80 requests",
                        "Unique photos with additional adjustments out of turn",
                        "just one photo - 0.31$",
                        "Unforgettable enjoyment of exclusive photos",
                      ]}
                  />
                </ul>
              </section>
              <hr style={{margin: 40, height: 1}}/>
              <section className="home-how">
                <h2 className="home-how__heading">
                  {t('how.heading')}
                </h2>
                <div className="home-how__description">
                  {t('how.description')}
                </div>
                <Image
                    src={Iphone2Image}
                    className="home-how__image"
                    alt="nude pictures online"
                    sizes="100vw"
                />
                <div className="home-how__accordion">
                  <Accordion intlName="howToUse" variant="instruction"/>
                  <div className="circle home-features__circle home-features__circle--1"></div>
                  <div className="circle home-features__circle home-features__circle--2"></div>
                </div>
              </section>
              <section className="home-promo-banners">
                <div className="home-referal">
                  <div className="home-referal__title">
                    <div className="icon home-referal__title-icon">
                      <EmojiFireIcon/>
                    </div>
                    {t('referal.title')}
                  </div>
                  <div className="home-referal__content">
                    <div className="home-referal__badge">
                      {t('referal.badge.text')}
                      <div className="home-referal__badge--font-bold">
                        1$
                      </div>
                    </div>
                    <h2 className="home-referal__heading">
                      {t('referal.heading')}
                    </h2>
                    <div className="home-referal__description">
                      {t('referal.description')}
                    </div>
                    <Button iconLeft={<UserPlusIcon/>} color="white">{t('referal.button')}</Button>
                  </div>
                  <Image
                      src={ReferalBackground}
                      className="home-referal__background"
                      alt="ai nude undresser"
                      sizes="100vw"
                      fill
                  />
                  {/*<div className="icon home-referal__path">*/}
                  {/*  <LinePath1 />*/}
                  {/*</div>*/}
                  {/*<div className="icon home-referal__star home-referal__star--1">*/}
                  {/*  <StarElement />*/}
                  {/*</div>*/}
                  {/*<div className="icon home-referal__star home-referal__star--2">*/}
                  {/*  <StarElement />*/}
                  {/*</div>*/}
                </div>
                <div className="home-undress">
                  <div className="home-undress__content">
                    <h3 className="home-undress__heading">
                      {t('undress.heading')}
                    </h3>
                    <div className="home-undress__description">
                      <p>
                        {t('undress.description')}
                      </p>
                    </div>
                    <Button iconLeft={<HangerIcon/>} className="home-undress__button">
                      {t('celebrity.button')}
                    </Button>
                  </div>
                  <Image
                      src={GirlUndressBackground}
                      className="home-undress__background"
                      alt="ai clothes remover nudes"
                      sizes="100vw"
                      fill
                  />
                  {/*<div className="icon home-undress__path">*/}
                  {/*  <LinePath2 />*/}
                  {/*</div>*/}
                  {/*<div className="circle home-undress__circle home-undress__circle--1"></div>*/}
                  {/*<div className="circle home-undress__circle home-undress__circle--2"></div>*/}
                  {/*<div className="circle home-undress__circle home-undress__circle--3"></div>*/}
                  {/*<div className="circle home-undress__boxblur"></div>*/}
                </div>
              </section>
              <section className="home-faq">
                <h2 className="home-faq__heading">
                  {t('faq.heading')}
                </h2>
                <Accordion intlName="homeFaq"/>
              </section>
              <section className="home-blog">
                <ul className="home-blog__list">
                  {data.map((entry: any, index: number) => (
                      <BlogItem entry={entry} key={index} className={"home-blog__item"} variant={"scroll"} />
                  ))}
                </ul>
              </section>
              <section className="home-welcome">
                <SingleQuestion title={"Welcome to DeepNude Art"}>
                  <h2>Welcome to AI DEEP NUDE</h2>
                  <p>
                    Want to see a completely new side of your photos? AI Deep Nude uses advanced AI technology to remove
                    clothes from any image, creating realistic deepnude apk versions of clothed ones. Ready to unveil
                    the unexpected? Try a free deepnude generator today!
                  </p>
                  <h3>How does AI Deep Nude work?</h3>
                  <p>
                    Are you curious about what your photos would look like without clothes? AI Deep Nude instantly
                    removes clothes from any photo using cutting-edge nudity AI technology. By analyzing your image and
                    comparing it with a vast database of reference photos, the AI generates a realistic, fully
                    clothed-free version. So do not think twice and download deepnude for free!
                  </p>
                  <p>
                    When you upload your photo, internal algorithms rapidly scan your photo, recognize the human figure,
                    compare it to similar ones in the database, and create an equivalent, realistic image without
                    clothing.
                  </p>
                  <p>
                    Ready to try this innovative clothes remover? Upload your photo and see the transformation in
                    seconds!
                  </p>
                  <h3>Main advantages and features of AI Deep Nude App</h3>
                  <p>
                    AI Deep Nude Free comes with a range of amazing benefits. Here’s why our tool stands out:
                  </p>
                  <ul>
                    <li>
                      Cross-device accessibility: You can create deepnude ai no blur photos from any device, whether
                      it’s your deepnude download PC or smartphone.
                    </li>
                    <li>
                      High-quality results: You’ll receive top-notch, realistic deepnude apk mod images with every use.
                    </li>
                    <li>
                      Speed and efficiency: Our tool guarantees fast processing, so you won’t have to wait long for your
                      images.
                    </li>
                    <li>
                      Wide format support: Whether it’s JPEG, PNG, or another format, our nudifier AI handles various
                      photo types without issue.
                    </li>
                  </ul>
                  <p>
                    Moreover, create deepnude mod apk photos from any device, be it a PC or a smartphone. Our tool
                    supports a wide range of formats, so you never have to worry about compatibility issues. Download
                    deepnude now!
                  </p>
                  <h3>
                    More features of our AI nudedeep:
                  </h3>
                  <ul>
                    <li>
                      Fast image generation
                    </li>
                    <li>
                      Confidentiality
                    </li>
                    <li>
                      Referral program
                    </li>
                    <li>
                      Advanced AI algorithms
                    </li>
                    <li>
                      We have a website, Android and iOS apps, for deepnude download windows and a Telegram bot
                    </li>
                    <li>
                      Free trial version
                    </li>
                    <li>
                      Fast free deepnude account creation
                    </li>
                  </ul>
                </SingleQuestion>
              </section>
              <Footer variant={"layout-right"}/>
            </div>
          </div>
        </div>
      </>
  );
}
