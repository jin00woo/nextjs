import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import ApolloProviderWrapper from "@/components/ApolloProvider";

export const metadata: Metadata = {
  title: "Your Own AI Assistant",
  description: "Fully customizable AI Assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ApolloProviderWrapper>
      <ClerkProvider>
        <html lang="en">
          <body className="min-h-screen flex">{children}</body>
        </html>
      </ClerkProvider>
    </ApolloProviderWrapper>
  );
}
