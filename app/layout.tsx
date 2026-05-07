import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TaxSort – Auto-classify invoice line items for tax deductions",
  description: "AI categorizes freelancer expenses and income for tax filing, suggests deduction opportunities based on expense patterns."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a78a8ab2-2828-4253-9cac-f1f3284bdeab"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
