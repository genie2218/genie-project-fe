import type { Metadata } from "next";
import { Noto_Sans } from 'next/font/google';
import styles from './styles.module.scss';
import "./globals.scss";

const NotoSans = Noto_Sans({
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  preload: false,
});

export const metadata: Metadata = {
  title: "Buy your dream home - Genie",
  description: "Find your perfect home with Genie.com. Explore a variety of options and make your dream of owning a home a reality. Start your property search today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={NotoSans.className}>
      <body>
        <header className={styles.headerContainer}>
          <div className={styles.header}>
            <h1>Genie</h1>
          </div>
        </header>
        <section className={styles.sectionContainer}>
          <div className={styles.section}>
            {children}
          </div>
        </section>
        <footer className={styles.footer}>
        </footer>
      </body>
    </html>
  );
}
