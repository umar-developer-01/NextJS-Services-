import type { Metadata } from "next";
import { inter, sevillana, dancing_script } from "../fonts";
import { AppProvider } from "@/appContext/index";
import { ModalProvider } from "@/modal/context";
import layoutStyle from "./layout.module.css";
import "./global.css";

export const metadata: Metadata = {
  title: "Saloon App",
  description: "Generated by create next app",
};

export default function RootLayout({
  header,
  children,
  details,
  banner,
  courses,
  sidebar,
  address,
  contactus,
  services
}: Readonly<{
  header: React.ReactNode;
  children: React.ReactNode;
  details: React.ReactNode;
  banner: React.ReactNode;
  sidebar:React.ReactNode;
  courses:React.ReactNode;
  address:React.ReactNode;
  contactus:React.ReactNode;
  services:React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Applying font classes to the body ensures they affect all routes */}
      <body
        className={`${inter.variable} ${sevillana.variable} ${dancing_script.variable}`}
      >
        <AppProvider>
          <ModalProvider>
            <div className="app-wrapper">
              <div>{header}</div>
              {children}
      
              <div className={layoutStyle.bannerDetailsContainer}>
                <div>{services}</div>
                <div className={layoutStyle.detailsCotianer}>{details}</div>
                <div className={layoutStyle.bannerContainer}>{banner}</div>
                <div>{courses}</div>
                <div>{address}</div>
                {/* <div>{contactus}</div> */}

              </div>
         
        
              {sidebar}
            </div>
          </ModalProvider>
        </AppProvider>
      </body>
    </html>
  );
}
