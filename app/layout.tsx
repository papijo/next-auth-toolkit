import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Toaster } from "sonner";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auth Toolkit",
  description: "Created by Papijo",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={urbanist.className}>
          <Toaster />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
