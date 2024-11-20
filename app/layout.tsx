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
        <footer className={styles.footerContainer}>
          <div className={styles.footer}>
            <div className="col-md-3 col-sm-6">
              <div
                id="block-26"
                className="footer-widget widget widget-wrap widget_block"
              >
                <h2 className="wp-block-heading has-medium-font-size">
                  Buy Property in South Delhi
                </h2>
              </div>
              <div
                id="block-16"
                className="footer-widget widget widget-wrap widget_block"
              >
                <ul>
                  <li>
                    <a href="https://abhisshektewari.com/luxury-homes-for-sale-south-delhi/">
                      Buy Luxury Homes in South Delhi
                    </a>
                  </li>
                  <li>
                    <a href="https://abhisshektewari.com/builder-floor-for-sale-in-south-delhi/">
                      Buy Builder Floor in South Delhi
                    </a>
                  </li>
                  <li>
                    <a href="https://abhisshektewari.com/farmhouse-for-sale-in-delhi/">
                      Buy Farmhouses in Delhi
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://abhisshektewari.com/builder-floor-for-sale-in-south-delhi/"
                      data-type="page"
                      data-id={5436}
                    >
                      Independent Floors in for Sale South Delhi
                    </a>
                  </li>
                  <li>
                    <a href="https://abhisshektewari.com/luxury-homes-for-sale-south-delhi/">
                      Luxury Homes for Sale in South Delhi
                    </a>
                  </li>
                </ul>
              </div>
              <div
                id="block-39"
                className="footer-widget widget widget-wrap widget_block"
              >
                <hr className="wp-block-separator has-alpha-channel-opacity" />
              </div>
              <div
                id="block-49"
                className="footer-widget widget widget-wrap widget_block widget_text"
              >
                <p>
                  <a
                    href="https://abhisshektewari.com/contact/"
                    data-type="page"
                    data-id={1100}
                  >
                    Contact Us
                  </a>
                </p>
              </div>
              <div
                id="block-51"
                className="footer-widget widget widget-wrap widget_block widget_text"
              >
                <p>
                  <a href="https://abhisshektewari.com">Home</a>
                </p>
              </div>
              <div
                id="block-52"
                className="footer-widget widget widget-wrap widget_block widget_text"
              >
                <p>
                  <a href="https://abhisshektewari.com/sitemap/">Sitemap</a>
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div
                id="block-14"
                className="footer-widget widget widget-wrap widget_block"
              >
                <div className="wp-block-columns is-layout-flex wp-container-3">
                  <div className="wp-block-column is-layout-flow">
                    <h2 className="wp-block-heading has-medium-font-size">
                      Popular Locality Searches
                    </h2>
                    <ul>
                      <li>
                        <a href="https://abhisshektewari.com/luxury-homes-for-sale-in-golf-links/">
                          Buy Property in Golf Links
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://abhisshektewari.com/property-for-sale-jor-bagh/"
                          data-type="URL"
                          data-id="https://abhisshektewari.com/property-for-sale-jor-bagh/"
                        >
                          Buy Property in Jor Bagh
                        </a>
                      </li>
                      <li>
                        <a href="https://abhisshektewari.com/property-for-sale-in-westend-colony/">
                          Buy Property in Westend Colony
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://abhisshektewari.com/builder-floor-for-sale-in-panchsheel-park/"
                          data-type="URL"
                          data-id="https://abhisshektewari.com/builder-floor-for-sale-in-panchsheel-park/"
                        >
                          Buy Property in Panchsheel Park
                        </a>
                      </li>
                      <li />
                    </ul>
                    <div className="wp-block-columns is-layout-flex wp-container-1" />
                  </div>
                </div>
              </div>
              <div
                id="block-15"
                className="footer-widget widget widget-wrap widget_block widget_text"
              >
                <p />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div
                id="block-24"
                className="footer-widget widget widget-wrap widget_block"
              >
                <h2 className="wp-block-heading has-medium-font-size">
                  Buy Property in North Goa{" "}
                </h2>
              </div>
              <div
                id="block-22"
                className="footer-widget widget widget-wrap widget_block"
              >
                <ul>
                  <li>
                    <a href="https://abhisshektewari.com/villas-for-sale-north-goa/">
                      Luxury Villas for Sale in North Goa
                    </a>
                  </li>
                  <li>
                    <a href="https://abhisshektewari.com/luxury-villas-for-sale-in-assagao/">
                      Luxury Villas for sale in Assagao
                    </a>
                  </li>
                  <li>
                    <a href="https://abhisshektewari.com/luxury-villas-for-sale-in-sapiem-hills/">
                      Luxury Villas for Sale Sapiem
                    </a>
                  </li>
                  <li>
                    <a href="https://abhisshektewari.com/luxury-villas-for-sale-in-parra/">
                      Luxury Villas for Sale in Parra
                    </a>
                  </li>
                  <li>
                    <a href="https://abhisshektewari.com/luxury-villas-for-sale-in-anjuna/">
                      Luxury Villas for Sale in Anjuna
                    </a>
                  </li>
                  <li>
                    <a href="https://abhisshektewari.com/villa-for-sale-siolim">
                      Luxury Villas for Sale in Siolim
                    </a>
                  </li>
                  <li style={{ fontSize: 14 }}>
                    <a href="https://abhisshektewari.com/apartments-for-sale-in-goa/">
                      Buy Apartments for Sale in North Goa
                    </a>
                  </li>
                </ul>
              </div>
              <div
                id="block-42"
                className="footer-widget widget widget-wrap widget_block"
              >
                <hr className="wp-block-separator has-alpha-channel-opacity" />
              </div>
              <div
                id="block-47"
                className="footer-widget widget widget-wrap widget_block"
              >
                <h2 className="wp-block-heading has-medium-font-size">
                  <br />
                  Property Vlogs
                </h2>
              </div>
              <div
                id="block-48"
                className="footer-widget widget widget-wrap widget_block"
              >
                <ul>
                  <li>
                    <a href="https://youtu.be/qjAUI8SG0Ps">
                      3BHK Villa in Siolim, Goa by Gauri Khan
                    </a>
                  </li>
                  <li>
                    <a href="https://youtu.be/pwfpVPocUHM">3BHK Villa in Anjuna, Goa</a>
                  </li>
                  <li>
                    <a href="https://youtu.be/M1LI9pDWWIs">
                      Sea View Villa in Dona Paula, Goa
                    </a>
                  </li>
                  <li>
                    <a href="https://youtu.be/oXBUleqXQCk">
                      Luxury Villas in Sapiem Hills, Goa
                    </a>
                  </li>
                  <li>
                    <a href="https://youtu.be/tsJ75WyQpdA">
                      Luxury Sea View Villa in Morjim
                    </a>
                  </li>
                </ul>
              </div>
              <div
                id="block-46"
                className="footer-widget widget widget-wrap widget_block widget_text"
              >
                <p />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div
                id="block-27"
                className="footer-widget widget widget-wrap widget_block"
              >
                <h2 className="wp-block-heading has-medium-font-size">
                  Property Resources
                </h2>
              </div>
              <div
                id="block-31"
                className="footer-widget widget widget-wrap widget_block"
              >
                <ul>
                  <li>
                    <a href="https://abhisshektewari.com/goa-property-guide/">
                      Buying Property in Goa- The Ultimate Guide[2023]
                    </a>
                  </li>
                  <li>
                    <a href="https://abhisshektewari.com/south-delhi-localities/">
                      South Delhi Locality Guide
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://abhisshektewari.com/property-rates-southdelhi/"
                      data-type="page"
                      data-id={6116}
                    >
                      South Delhi Property Rates and Trends [2023]
                    </a>
                  </li>
                  <li>
                    <a href="https://abhisshektewari.com/goa-localities/">
                      Goa Locality Guide
                    </a>
                  </li>
                  <li />
                </ul>
              </div>
              <div
                id="block-41"
                className="footer-widget widget widget-wrap widget_block"
              >
                <hr className="wp-block-separator has-alpha-channel-opacity" />
              </div>
              <div
                id="block-35"
                className="footer-widget widget widget-wrap widget_block"
              >
                <h2 className="wp-block-heading has-medium-font-size">Popular Blogs</h2>
              </div>
              <div
                id="block-36"
                className="footer-widget widget widget-wrap widget_block"
              >
                <ul>
                  <li>
                    <a
                      href="https://abhisshektewari.com/dlf-camellias-2/"
                      data-type="post"
                      data-id={4061}
                    >
                      DLF Camellias: Discover the Charm of Luxury Living
                    </a>
                  </li>
                  <li>
                    <a href="https://abhisshektewari.com/dlf-magnolias-where-luxury-meets-serenity/">
                      DLF Magnolias: Where Luxury Meets Serenity
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://abhisshektewari.com/trident-residences/"
                      data-type="post"
                      data-id={637}
                    >
                      Trident Residences, Jangpura: A new era in Luxury Living
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://abhisshektewari.com/botanica-neeti-bagh/"
                      data-type="post"
                    >
                      Botanica Neeti Bagh: Embrace Nature’s Tranquility in the Heart of
                      Delhi
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
