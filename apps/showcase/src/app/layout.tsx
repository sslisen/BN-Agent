import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agent Desk · Binance Agent OS Track A",
  description:
    "Multi-agent trading desk on Binance MCP — Research → Risk → Exec (confirm) → Positions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
