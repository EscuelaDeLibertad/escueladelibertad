import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { esES } from "@clerk/localizations";
import "./globals.css";
import ToastProvider from "@/components/providers/toast-provider";

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
    <ClerkProvider
      localization={esES}
      afterSignOutUrl="/"
      signInForceRedirectUrl="/search"
      signUpForceRedirectUrl="/search"
    >
      <html lang="en">
        <body className="overflow-x-hidden">
          <ToastProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
