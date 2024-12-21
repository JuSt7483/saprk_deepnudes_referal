import Header from "@/components/Header/Header";

export default async function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  return (
    <>
        <Header variant="login" />
        {children}
    </>
  );
}
