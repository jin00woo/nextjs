import React from "react";
import LeftSidebar from "../../components/LeftSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>
        <LeftSidebar /> {children}
        <p className="text-white-1">RIGHTBAR</p>
      </main>
    </div>
  );
}
