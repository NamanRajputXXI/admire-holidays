import { Inter } from "next/font/google";
import "../styles/globals.css";
import "../styles/custom.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admire Holidays",
  description: "Admire Holidays",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Add other meta tags or links to stylesheets if needed */}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
