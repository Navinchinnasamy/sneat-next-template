import type { Metadata } from "next";
import "../globals.css";
import "@/app/assets/vendor/css/core.css";
import "@/app/assets/vendor/css/theme-default.css";
import "@/app/assets/vendor/css/pages/page-auth.css";
import "@/app/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";

export const metadata: Metadata = {
  title: "Next Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="light-style customizer-hide">
      <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner">
        {children}
        </div>
        </div>
        </div>
      </body>
    </html>
  );
}