import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default async function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  return (
    <>
      <Header />
      <div className="container" style={{ marginBottom: 80 }}>
        {children}
      </div>
      <Footer className="container" />
    </>
  );
}
