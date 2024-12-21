"use client";

import { ArrowLeftLongIcon } from "@/components/UI/svg";
import "./style.scss"
import { useRouter } from "@/i18n/routing";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  const router = useRouter()

  return (
    <>
      {/* <Header /> */}
      <div className="layout-container container-pay">
        {children}
        <button onClick={() => router.back()} className="layout-button icon">
          <ArrowLeftLongIcon />
        </button>
      </div>
      {/* <Footer className="container" /> */}
    </>
  );
}
