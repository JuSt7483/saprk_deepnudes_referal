import BannerDiscount from "@/components/BannerDiscount/BannerDiscount";
import BannerImprove from "@/components/BannerImprove/BannerImprove";
import BannerInvite from "@/components/BannerInvite/BannerInvite";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Link } from "@/i18n/routing";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

import AppleIconImage from '../../../../public/Icons/AppleIcon.png'
import AndroidIconImage from '../../../../public/Icons/AndroidIcon.png'

export default async function LayoutRight({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
    auth().protect();
    return (
        <div className="layout-right container-large">
            <div className="layout-right__not-scrollable layout-right__not-scrollable--nohide">
                <Header variant="layout-right" className="visible-tablet layout-right__not-scrollable-header" />
                <BannerDiscount variant={"small"} className="visible-tablet layout-right__not-scrollable-banner" />
                {children}
            </div>
            <div className="layout-right__scrollable layout-right__scrollable--nopadding">
                <Header variant="layout-right" className="hidden-tablet" />
                <BannerDiscount className={"hidden-tablet"} />
                <BannerInvite />
                <BannerImprove />
                <div className="layout-right__buttons">
                    <Link href="/ios" className="layout-right__buttons-item">
                        <Image 
                            src={AppleIconImage}
                            alt="AppleIcon"
                            className='footer__buttons-icon'
                            width={42}
                            height={42}
                        />
                        Apple IOS
                    </Link>
                    <Link href="/android" className="layout-right__buttons-item">
                        <Image 
                            src={AndroidIconImage}
                            alt="AndroidIcon"
                            className='footer__buttons-icon'
                            width={42}
                            height={42}
                        />
                        Android
                    </Link>
                </div>
                <Footer noButtons variant={"layout-right"} />
            </div>
        </div>
    );
}
