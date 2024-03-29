import { Inter } from "next/font/google";
import "../styles/globals.css";
import "../styles/custom.css";
import Head from "next/head";
import NextTopLoader from "nextjs-toploader";

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
      <body className={inter.className}>
        <NextTopLoader
          color="#FD4A4C"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
        />
        {children}
      </body>
    </html>
  );
}
