import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Weight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const IbmPlex = IBM_Plex_Sans( {
  subsets: ["latin"] ,
  weight : ['400' , '500' , '600' , '700'] ,
  variable : "--font-ibm-plex"

}
);

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={cn("font-IBmPlex antialiased" , IbmPlex.variable)}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
